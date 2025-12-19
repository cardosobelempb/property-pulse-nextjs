import { Property } from "@/domain/entities/Property";
import { PropertyRepository } from "@/domain/application/repositories/PropertyRepository";
import { NextRequest } from "next/server";
import { PropertyPresenter } from "@/infra/presenters/PropertyPresenter";
import { IPagination } from "@/shared";

export namespace FindAllProperty {
  export interface Input extends IPagination {}
  export interface Output {
    properties: PropertyPresenter[];
  }
}

export class FindAllPropertyUseCase {
  constructor(private readonly repository: PropertyRepository) {}

  async execute(input: FindAllProperty.Input): Promise<FindAllProperty.Output> {
    const { page, size, direction } = input;

    const result = await this.repository.findAll({
      page,
      size,
      direction,
    });
    const properties = PropertyPresenter.toHTTPList(result);
    return {
      properties,
    };
    // const pageParam = request.nextUrl.searchParams.get("page");
    // const page = pageParam ? Number(pageParam) : 1;
    // const properties = await this.repository.findAll({ page });
    // return { properties };
  }
}
