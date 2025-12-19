import { makeFindPropertyByIdUseCase } from "@/application/factories/property";
import { PropertyPresenter } from "@/infra/presenters/PropertyPresenter";
import { extractId } from "@/shared/extract-id";
import { NextRequest, NextResponse } from "next/server";

export namespace GetIdHttp {
  export interface Input {
    name: string;
    description: string;
  }

  export interface OutPut {
    property: PropertyPresenter;
  }
}

// Função para buscar uma categoria pelo ID
export async function GET(
  request: NextRequest
): Promise<NextResponse<{ error: string } | GetIdHttp.OutPut>> {
  try {
    // Extrair o ID da URL
    const id = extractId(request) as string;

    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "ID da categoria não fornecido." }),
        { status: 400 }
      );
    }

    const findPropertyByIdUseCase = makeFindPropertyByIdUseCase();
    const { property } = await findPropertyByIdUseCase.execute({ id });

    if (!property) {
      return new NextResponse(
        JSON.stringify({ error: "Property não encontrada." }),
        { status: 404 }
      );
    }

    return NextResponse.json({ property: PropertyPresenter.toHTTP(property) });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Erro ao buscar a property." }),
      { status: 500 }
    );
  }
}
