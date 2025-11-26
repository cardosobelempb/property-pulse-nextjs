// src/application/use-cases/CreatePropertyUseCase.ts
import { PropertyRepository } from "@/domain/repositories/PropertyRepository";
import { PropertyEntity, PropertyProps } from "@/domain/entities/Property";

interface CreatePropertyRequest {
  name: string;
  description?: string;
}

export class CreatePropertyUseCase {
  constructor(private readonly repository: PropertyRepository) {}

  async execute({
    baths,
    beds,
    type,
    name,
    description,
    isFeatured,
    squareFeet,
    locationId,
    rateId,
    userId,
  }: PropertyProps): Promise<PropertyEntity> {
    const existing = await this.repository.findById(name);
    if (existing) throw new Error("Já existe uma propriedade com esse nome.");

    const property = PropertyEntity.create({
      baths,
      beds,
      description,
      isFeatured,
      locationId,
      name,
      rateId,
      squareFeet,
      type,
      userId,
    });
    await this.repository.create(property);

    return property;
  }
}
