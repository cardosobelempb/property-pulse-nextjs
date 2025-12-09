import { Property } from "@/domain/entities/Property";
import { PropertyRepository } from "@/domain/application/repositories/PropertyRepository";
import { NextRequest } from "next/server";

export namespace FindAllProperty {
  export interface Request extends NextRequest {}
  export interface Response {
    properties: Property[];
  }
}

export class FindAllPropertyUseCase {
  constructor(private readonly repository: PropertyRepository) {}

  async execute(
    request: FindAllProperty.Request
  ): Promise<FindAllProperty.Response> {
    const pageParam = request.nextUrl.searchParams.get("page");
    const page = pageParam ? Number(pageParam) : 1;
    const properties = await this.repository.findAll({ page });
    console.log("Properties =>", properties);

    return { properties };
  }
}
