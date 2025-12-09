// infra/mappers/AmenityMapper.ts
import { Prisma, Amenity as AmenityPrisma } from "@/app/generated/prisma";
import { Amenity, AmenityProps } from "@/domain/entities/Amenity";

import { UUIDVO } from "@/shared";

export class AmenityMapper {
  static toDomain(raw: AmenityPrisma): Amenity {
    return Amenity.create(
      {
        name: raw.name,
        createdAt: raw.createdAt,
      },
      new UUIDVO(raw.id)
    );
  }

  static toPersistence(entity: Amenity): Prisma.AmenityUncheckedCreateInput {
    return {
      id: entity.id.getValue(),
      name: entity.name,
      createdAt: entity.createdAt,
    };
  }
}
