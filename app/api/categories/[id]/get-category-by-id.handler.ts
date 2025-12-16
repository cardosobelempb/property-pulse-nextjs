import { makeFindCategoryByIdUseCase } from "@/application/factories";
import { CategoryPresenter } from "@/infra/presenters/CategoryPresenter";
import { NextRequest, NextResponse } from "next/server";

export namespace GetIdHttp {
  export interface Input {
    name: string;
    description: string;
  }

  export interface OutPut {
    category: CategoryPresenter;
  }
}

// Função para buscar uma categoria pelo ID
export async function GET(
  request: NextRequest
): Promise<NextResponse<{ error: string } | GetIdHttp.OutPut>> {
  try {
    // Extrair o ID da URL
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop(); // Extrai o último segmento da URL, que é o ID

    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "ID da categoria não fornecido." }),
        { status: 400 }
      );
    }

    const findCategoryByIdUseCase = makeFindCategoryByIdUseCase();
    const category = await findCategoryByIdUseCase.execute(id);

    if (!category) {
      return new NextResponse(
        JSON.stringify({ error: "Categoria não encontrada." }),
        { status: 404 }
      );
    }

    return NextResponse.json({ category: CategoryPresenter.toHTTP(category) });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Erro ao buscar a categoria." }),
      { status: 500 }
    );
  }
}
