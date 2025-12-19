import { makeCreatePropertyUseCase } from "@/application/factories/property";
import { PropertyProps } from "@/domain/entities/Property";
import {
  PropertyPresenter,
  PropertyPresenterProps,
} from "@/infra/presenters/PropertyPresenter";
import { NextRequest, NextResponse } from "next/server";

/**
 * Controller HTTP responsável apenas por:
 * - Extrair dados da requisição
 * - Chamar o caso de uso
 * - Traduzir resposta para HTTP
 */

export namespace PostHttp {
  export interface Input extends PropertyProps {}

  export type OutPut = {
    property: PropertyPresenterProps;
  };
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<{ error: string } | PostHttp.OutPut>> {
  try {
    // 1️⃣ Extrai o body da requisição
    const input: PostHttp.Input = await request.json();
    console.log("POST =>", input);

    // 2️⃣ Validação básica de entrada (Fail Fast)
    if (!input.name) {
      return NextResponse.json(
        { error: "O campo 'name' é obrigatório." },
        { status: 400 }
      );
    }

    // 3️⃣ Criação do caso de uso via Factory
    const createPropertyUseCase = makeCreatePropertyUseCase();

    // 4️⃣ Execução da regra de negócio
    const { property } = await createPropertyUseCase.execute({
      name: input.name,
      description: input.description,
      baths: input.baths,
      beds: input.beds,
      isFeatured: input.isFeatured,
      location: input.location,
      rateId: input.rateId,
      squareFeet: input.squareFeet,
      type: input.type,
      userId: input.userId,
    });

    const { pathname, origin } = new URL(request.url);
    const resourceUrl = `${origin}${pathname}/${property.id}`;

    // 5️⃣ Retorno HTTP correto
    return NextResponse.json(
      {
        property: PropertyPresenter.toHTTP(property),
      },
      { status: 201, headers: { Location: resourceUrl } }
    );
  } catch (error) {
    console.error("[CREATE_PROPERTY_ERROR]", error);

    return NextResponse.json(
      { error: "Erro interno ao criar a categoria." },
      { status: 500 }
    );
  }
}
