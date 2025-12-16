import { makeCreateCategoryUseCase } from "@/application/factories/category";
import { CategoryPresenter } from "@/infra/presenters/CategoryPresenter";
import { NextRequest, NextResponse } from "next/server";

/**
 * Controller HTTP responsável apenas por:
 * - Extrair dados da requisição
 * - Chamar o caso de uso
 * - Traduzir resposta para HTTP
 */

export namespace PostHttp {
  export interface Input {
    name: string;
    description: string;
  }
  export type OutPut = {
    category: CategoryPresenter;
  };
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<{ error: string } | PostHttp.OutPut>> {
  try {
    // 1️⃣ Extrai o body da requisição
    const { name, description }: PostHttp.Input = await request.json();

    // 2️⃣ Validação básica de entrada (Fail Fast)
    if (!name) {
      return NextResponse.json(
        { error: "O campo 'name' é obrigatório." },
        { status: 400 }
      );
    }

    // 3️⃣ Criação do caso de uso via Factory
    const createCategoryUseCase = makeCreateCategoryUseCase();

    // 4️⃣ Execução da regra de negócio
    const { category } = await createCategoryUseCase.execute({
      name,
      description,
    });

    const { pathname, origin } = new URL(request.url);
    const resourceUrl = `${origin}${pathname}/${category.id.getValue()}`;

    // 5️⃣ Retorno HTTP correto
    return NextResponse.json(
      {
        category: CategoryPresenter.toHTTP(category),
      },
      { status: 201, headers: { Location: resourceUrl } }
    );
  } catch (error) {
    console.error("[CREATE_CATEGORY_ERROR]", error);

    return NextResponse.json(
      { error: "Erro interno ao criar a categoria." },
      { status: 500 }
    );
  }
}
