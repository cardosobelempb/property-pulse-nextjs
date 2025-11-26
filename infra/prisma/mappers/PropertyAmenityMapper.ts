import {
  Prisma,
  PropertyAmenity as PrismaPropertyAmenity,
} from "@/app/generated/prisma";
import { PropertyAmenity } from "@/domain/entities/PropertyAmenity";
import { AbstractMapper, BadRequestError, UUIDVO } from "@/shared";

/**
 * Interface de contrato para qualquer Mapper de PropertyAmenity
 * -> permite trocar Prisma no futuro sem quebrar o domínio
 */

/**
 * Implementação concreta do mapper com Prisma
 */
export class PropertyAmenityMapper
  implements AbstractMapper<PropertyAmenity, PrismaPropertyAmenity>
{
  static toDomain(raw: PrismaPropertyAmenity): PropertyAmenity {
    if (!raw.amenityId || !raw.propertyId) {
      throw new BadRequestError("Invalid attachement type");
    }
    return PropertyAmenity.create({
      amenityId: new UUIDVO(raw.amenityId),
      propertyId: new UUIDVO(raw.propertyId),
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
