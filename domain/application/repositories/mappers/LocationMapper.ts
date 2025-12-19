// infra/mappers/LocationMapper.ts
import { Location as LocationPrisma, Prisma } from "@/app/generated/prisma";
import { Location } from "@/domain/entities/Location";
import { UUIDVO } from "@/shared";

export class LocationMapper {
  static toDomain(raw: LocationPrisma): Location {
    return Location.create(
      {
        state: raw.state,
        city: raw.city,
        street: raw.street,
        zipcode: raw.zipcode,
      },
      UUIDVO.create(raw.id)
    );
  }

  static toPersistence(entity: Location): Prisma.LocationUncheckedCreateInput {
    return {
      state: entity.state,
      city: entity.city,
      street: entity.street,
      zipcode: entity.zipcode,
    };
  }
}
