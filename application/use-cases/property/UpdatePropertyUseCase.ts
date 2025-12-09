// src/application/use-cases/UpdatePropertyUseCase.ts
import { PropertyRepository } from "@/domain/application/repositories/PropertyRepository";
import { Property } from "@/domain/entities/Property";
import { UUIDVO } from "@/shared";

export namespace UpdateProperty {
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
    amenitiesIds: string[];
  }

  export interface Response {}
}

export class UpdatePropertyUseCase {
  constructor(private readonly propertyRepository: PropertyRepository) {}

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
    amenitiesIds,
  }: UpdateProperty.Request): Promise<UpdateProperty.Response> {
    const entity = await this.propertyRepository.findById(name);
    if (!entity) throw new Error("Já existe uma propriedade com esse nome.");

    if (userId !== entity.userId.getValue())
      throw new Error("Já existe uma propriedade com esse nome.");

    entity.updateBaths(baths);
    entity.updateBeds(beds);
    entity.updateDescription(description);
    entity.updateIsFeatured(isFeatured);
    entity.updateLocationId(new UUIDVO(locationId));
    entity.updateRateId(new UUIDVO(rateId));
    entity.updateUserId(new UUIDVO(userId));
    entity.updateName(name);
    entity.updateType(type);

    await this.propertyRepository.update(entity);

    return {};
  }
}
