// src/application/use-cases/CreatePropertyUseCase.ts
import { PropertyRepository } from "@/domain/application/repositories/PropertyRepository";
import { Property } from "@/domain/entities/Property";
import { UUIDVO } from "@/shared";

export namespace CreateProperty {
  export interface Request {
    name: string;
    description: string;
    baths: number;
    beds: number;
    type: string;
    isFeatured: boolean;
    squareFeet: number;
    locationId: string;
    rateId: string;
    userId: string;
  }

  export interface Response {
    property: Property;
  }
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
  }: CreateProperty.Request): Promise<CreateProperty.Response> {
    const existing = await this.repository.findById(name);
    if (existing) throw new Error("Já existe uma propriedade com esse nome.");

    const property = Property.create({
      baths,
      beds,
      description,
      isFeatured,
      locationId: new UUIDVO(locationId),
      name,
      rateId: new UUIDVO(rateId),
      squareFeet,
      type,
      userId: new UUIDVO(userId),
    });
    await this.repository.create(property);

    return { property };
  }
}
