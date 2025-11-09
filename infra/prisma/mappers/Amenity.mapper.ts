import { Amenity as PrismaAmenity } from "@/app/generated/prisma";
import { AmenityEntity } from "@/domain/entities/AmenityEntity";
import { AbstractMapper, UUIDVO } from "@/shared";

/**
 * Responsável por converter dados entre
 * o modelo Prisma (persistência) e o modelo de Domínio.
 *
 * Padrão: Mapper Pattern
 */
export class AmenityMapper
  implements AbstractMapper<AmenityEntity, PrismaAmenity>
{
  /** Converte o modelo Prisma em Entidade de Domínio */
  static toDomain(raw: PrismaAmenity): AmenityEntity {
    return AmenityEntity.create({
      name: raw.name,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });
  }

  /** Converte a Entidade de Domínio em modelo Prisma (para persistência) */
  static toPersistence(entity: AmenityEntity): PrismaAmenity {
    return {
      id: entity.id.getValue(),
      name: entity.name,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt ?? null,
      deletedAt: entity.deletedAt ?? null,
    };
  }
}
