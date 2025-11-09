import {
  Prisma,
  PropertyAmenity as PrismaPropertyAmenity,
} from "@/app/generated/prisma";
import { PropertyAmenityEntity } from "@/domain/entities/PropertyAmenityEntity";
import { AbstractMapper } from "@/shared";

/**
 * Interface de contrato para qualquer Mapper de PropertyAmenity
 * -> permite trocar Prisma no futuro sem quebrar o domínio
 */

/**
 * Implementação concreta do mapper com Prisma
 */
export class PropertyAmenityPrismaMapper
  implements AbstractMapper<PropertyAmenityEntity, PrismaPropertyAmenity>
{
  toDomain(raw: PrismaPropertyAmenity): PropertyAmenityEntity {
    return PropertyAmenityEntity.create({
      amenityId: raw.amenityId,
      propertyId: raw.propertyId,
    });
  }

  toPrisma(
    entity: PropertyAmenityEntity
  ): Prisma.PropertyAmenityUncheckedCreateInput {
    return {
      amenityId: entity.amenityId,
      propertyId: entity.props.propertyId,
    };
  }
}
