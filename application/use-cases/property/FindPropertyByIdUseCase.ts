import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma/PropertyPrismaRepository";
import { Property } from "@/domain/entities/Property";

export namespace FindPropertyById {
  export interface Input {
    id: string;
  }
  export type OutPut = {
    property: Property | null;
  };
}

export class FindPropertyByIdUseCase {
  constructor(
    private readonly propertyPrismaRepository: PropertyPrismaRepository
  ) {}

  async execute({
    id,
  }: FindPropertyById.Input): Promise<FindPropertyById.OutPut> {
    const property = await this.propertyPrismaRepository.findById(id);

    return { property };
  }
}
