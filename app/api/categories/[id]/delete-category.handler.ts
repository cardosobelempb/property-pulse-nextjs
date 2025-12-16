import {
  makeDeleteCategoryUseCase,
  makeFindCategoryByIdUseCase,
} from "@/application/factories";
import { NotFoundError } from "@/shared";
import { NextRequest, NextResponse } from "next/server";

/**
 * Controller HTTP responsável apenas por:
 * - Extrair dados da request
 * - Chamar o caso de uso
 * - Traduzir resposta para HTTP
 */
export async function DELETE(
  request: NextRequest
): Promise<NextResponse<null | { error: string }>> {
  try {
    // Extrair o ID da URL
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop(); // Extrai o último segmento da URL, que é o ID
    console.log("ID =>", id);

    if (!id) {
      return NextResponse.json(
        { error: "'categoryId' é obrigatório." },
        { status: 400 }
      );
    }

    const findCategoryByIdUseCase = makeFindCategoryByIdUseCase();
    const category = await findCategoryByIdUseCase.execute(id);
    console.log(category);

    if (!category) {
      return new NextResponse(
        JSON.stringify({ error: "Categoria não encontrada." }),
        { status: 404 }
      );
    }

    const deleteCategoryUseCase = makeDeleteCategoryUseCase();
    await deleteCategoryUseCase.execute(category.id.getValue());

    return new NextResponse(JSON.stringify({}), { status: 200 });
  } catch (error) {
    console.error("[DELETE_CATEGORY_ERROR]", error);

    if (error instanceof NotFoundError) {
      return new NextResponse(
        JSON.stringify({ error: "Categoria não encontrada." }),
        { status: 404 }
      );
    }
    return new NextResponse(
      JSON.stringify({ error: "Erro interno ao deletar categoria." }),
      { status: 500 }
    );
  }
}
