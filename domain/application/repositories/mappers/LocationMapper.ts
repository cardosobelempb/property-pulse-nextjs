// infra/mappers/LocationMapper.ts
import { Location } from "@/domain/entities/Location";
import { Location as LocationPrisma, Prisma } from "@/app/generated/prisma";
import { UUIDVO } from "@/shared";

export class LocationMapper {
  static toDomain(raw: LocationPrisma): Location {
    return Location.create(
      {
        state: raw.state,
        city: raw.city,
        street: raw.street,
        zipCode: raw.zipcode,
      },
      new UUIDVO(raw.id)
    );
  }

  static toPersistence(entity: Location): Prisma.LocationUncheckedCreateInput {
    return {
      id: entity.id.getValue(),
      state: entity.state,
      city: entity.city,
      street: entity.street,
      zipcode: entity.zipCode,
    };
  }
}
