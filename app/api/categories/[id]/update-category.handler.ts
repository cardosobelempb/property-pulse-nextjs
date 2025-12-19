import { NextRequest, NextResponse } from "next/server";
import { makeUpdateCategoryUseCase } from "@/application/factories";
import { CategoryPresenter } from "@/infra/presenters/CategoryPresenter";
import { extractId } from "@/shared/extract-id";
import { NotFoundError } from "@/shared";

/**
 * DTO responsável apenas pelos dados necessários
 * para atualização de uma categoria.
 */
export namespace PutHttp {
  export interface Input {
    name: string;
    description: string;
  }

  export interface OutPut {
    category: CategoryPresenter;
  }
}

/**
 * Handler HTTP responsável por atualizar uma categoria.
 */
export async function PUT(
  request: NextRequest
): Promise<NextResponse<PutHttp.OutPut | { error: string }>> {
  try {
    const body = (await request.json()) as PutHttp.Input;
    const categoryId = extractId(request) as string;

    if (!categoryId) {
      return NextResponse.json(
        { error: "'categoryId' é obrigatório." },
        { status: 400 }
      );
    }

    const updateCategoryUseCase = makeUpdateCategoryUseCase();
    const { category } = await updateCategoryUseCase.execute(categoryId, {
      name: body.name,
      description: body.description,
    });

    if (!category) {
      return new NextResponse(
        JSON.stringify({ error: "Categoria não encontrada." }),
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        category: CategoryPresenter.toHTTP(category),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[UPDATE_CATEGORY_ERROR]", error);

    if (error instanceof NotFoundError) {
      return new NextResponse(
        JSON.stringify({ error: "Categoria não encontrada." }),
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Erro ao atualizar a categoria." },
      { status: 500 }
    );
  }
}
