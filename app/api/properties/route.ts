import { NextRequest, NextResponse } from "next/server";
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma/repositories/PropertyPrismaRepository";
import { CreatePropertyUseCase } from "@/application/use-cases/property/CreatePropertyUseCase";
import { FindAllPropertyUseCase } from "@/application/use-cases/property/FindAllPropertyUseCase";

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
  const repository = new PropertyPrismaRepository();
  const properties = new FindAllPropertyUseCase(repository);
  // console.log("Prop =>", properties);
  return NextResponse.json(properties);
}
