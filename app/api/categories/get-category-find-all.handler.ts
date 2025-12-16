import { makeFindAllCategoryUseCase } from "@/application/factories";
import { NextRequest, NextResponse } from "next/server";

/**
 * Controller responsável por listar categorias com paginação
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // 1️⃣ Extrai parâmetros de query
    const pageParam = request.nextUrl.searchParams.get("page");
    const sizeParam = request.nextUrl.searchParams.get("size");

    // 2️⃣ Converte e valida (Fail Fast)
    const page = Math.max(Number(pageParam) || 1, 1);
    const size = Math.min(Math.max(Number(sizeParam) || 20, 1), 100);

    // 3️⃣ Executa o caso de uso
    const findAllCategoryUseCase = makeFindAllCategoryUseCase();

    const result = await findAllCategoryUseCase.execute({
      page,
      size,
    });

    // 4️⃣ Retorna dados + metadados
    return NextResponse.json({
      data: result.categories,
      pagination: {
        page,
        size,
        total: result.categories.length,
        totalPages: Math.ceil(result.categories.length / size),
      },
    });
  } catch (error) {
    console.error("[FIND_ALL_CATEGORIES_ERROR]", error);

    return NextResponse.json(
      { error: "Ocorreu um erro ao buscar as categorias." },
      { status: 500 }
    );
  }
}
