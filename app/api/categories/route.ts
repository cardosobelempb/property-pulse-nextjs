import { NextRequest, NextResponse } from "next/server";

import {
  FindAllCategory,
  FindAllCategoryUseCase,
} from "@/application/use-cases/category/FindAllCategoryUseCase";
import { CreatePropertyUseCase } from "@/application/use-cases/property/CreatePropertyUseCase";
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma";
import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";
import {
  CategoryHttp,
  CategoryPresenter,
} from "@/infra/presenters/CategoryPresenter";

export namespace RouterCategory {
  export interface Input extends NextRequest {}

  export interface Output extends NextResponse {
    categories: CategoryHttp.Output;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const repository = new PropertyPrismaRepository();
    const useCase = new CreatePropertyUseCase(repository);

    const property = await useCase.execute(body);
    return NextResponse.json(
      { message: "Propriedade criada com sucesso", property },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Parsing do HTTP pertence à camada de interface
  const pageParam = request.nextUrl.searchParams.get("page");

  const page = pageParam ? Number(pageParam) : 1;

  // Regra defensiva básica
  const safePage = Number.isNaN(page) || page < 1 ? 1 : page;

  const categoryPrismaRepository = new CategoryPrismaRepository();
  const findAllCategoryUseCase = new FindAllCategoryUseCase(
    categoryPrismaRepository
  );

  const { categories } = await findAllCategoryUseCase.execute({
    page: safePage,
  });

  return NextResponse.json({
    categories: CategoryPresenter.toHTTPList(categories),
  });
}
