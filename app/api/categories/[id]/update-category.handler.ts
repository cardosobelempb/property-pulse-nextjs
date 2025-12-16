import { NextRequest, NextResponse } from "next/server";
import { makeUpdateCategoryUseCase } from "@/application/factories";
import { CategoryPresenter } from "@/infra/presenters/CategoryPresenter";

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
 * Extrai o ID da URL de forma segura.
 */
function extractCategoryId(request: NextRequest): string | null {
  const segments = new URL(request.url).pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? null;
}

/**
 * Validação básica de entrada (Fail Fast)
 */
function validateInput(id: string | null, input: PutHttp.Input): string | null {
  if (!id) return "O ID da categoria é obrigatório.";
  if (!input.name || !input.description)
    return "Nome e descrição são obrigatórios.";
  return null;
}

/**
 * Handler HTTP responsável por atualizar uma categoria.
 */
export async function PUT(
  request: NextRequest
): Promise<NextResponse<{ error: string } | PutHttp.OutPut>> {
  try {
    const body = (await request.json()) as PutHttp.Input;
    const id = extractCategoryId(request) as string;

    // Fail Fast
    const validationError = validateInput(id, body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const updateCategoryUseCase = makeUpdateCategoryUseCase();

    const { category } = await updateCategoryUseCase.execute(id, {
      name: body.name,
      description: body.description,
    });

    return NextResponse.json(
      {
        category: CategoryPresenter.toHTTP(category),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[UPDATE_CATEGORY_ERROR]", error);

    return NextResponse.json(
      { error: "Erro ao atualizar a categoria." },
      { status: 500 }
    );
  }
}
