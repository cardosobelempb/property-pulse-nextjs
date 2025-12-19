import {
  Prisma,
  PropertyAmenity as PropertyAmenityPrisma,
  Amenity as AmenityPrisma,
} from "@/app/generated/prisma";
import {
  PropertyAmenity,
  PropertyAmenityProps,
} from "@/domain/entities/PropertyAmenity";
import { AbstractMapper, BadRequestError, UUIDVO } from "@/shared";
import { AmenityMapper } from "./AmenityMapper";

/**
 * Interface de contrato para qualquer Mapper de PropertyAmenity
 * -> permite trocar Prisma no futuro sem quebrar o domínio
 */

/**
 * Implementação concreta do mapper com Prisma
 */

export interface PropertyAmenityMapperProps extends PropertyAmenityPrisma {
  amenity: AmenityPrisma; // incluímos a entidade completa
}

export class PropertyAmenityMapper
  implements AbstractMapper<PropertyAmenity, PropertyAmenityMapperProps>
{
  static toDomain(raw: PropertyAmenityMapperProps): PropertyAmenity {
    if (!raw.amenity || !raw.amenityId || !raw.propertyId) {
      throw new BadRequestError("Invalid PropertyAmenity pivot record");
    }

    return PropertyAmenity.create({
      propertyId: UUIDVO.create(raw.propertyId),
      amenityId: UUIDVO.create(raw.amenityId),

      // Props herdados de AmenityProps
      name: raw.amenity.name,
      createdAt: raw.amenity.createdAt,
      updatedAt: raw.amenity.updatedAt,
      deletedAt: raw.amenity.deletedAt,
    });
  }

  static toPersistence(
    entity: PropertyAmenity
  ): Prisma.PropertyAmenityUncheckedCreateInput {
    return {
      amenityId: entity.amenityId.getValue(),
      propertyId: entity.propertyId.getValue(),
    };
  }
}
