// src/application/use-cases/CreatePropertyUseCase.ts
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma";

import { Property, PropertyProps } from "@/domain/entities/Property";

export namespace CreateProperty {
  export interface Input extends PropertyProps {}

  export interface OutPut {
    property: Property;
  }
}

export class CreatePropertyUseCase {
  constructor(
    private readonly propertyPrismaRepository: PropertyPrismaRepository
  ) {}

  async execute(input: CreateProperty.Input): Promise<CreateProperty.OutPut> {
    const entity = Property.create(input);
    const property = await this.propertyPrismaRepository.insert(entity);

    return { property };
  }
}
