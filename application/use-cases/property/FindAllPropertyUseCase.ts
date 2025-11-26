import { PropertyEntity } from "@/domain/entities/Property";
import { PropertyRepository } from "@/domain/repositories/PropertyRepository";
import { NextRequest } from "next/server";

export class FindAllPropertyUseCase {
  constructor(private readonly repository: PropertyRepository) {}

  async execute(request: NextRequest): Promise<PropertyEntity[]> {
    const pageParam = request.nextUrl.searchParams.get("page");
    const page = pageParam ? Number(pageParam) : 1;
    return await this.repository.findAll({ page });
  }
}
