import { Location as PrismaLocation } from "@/app/generated/prisma";
import { LocationEntity } from "@/domain/entities/LocationEntity";
import { AbstractMapper, UUIDVO } from "@/shared";

/**
 * Responsável por converter dados entre
 * o modelo Prisma (persistência) e o modelo de Domínio.
 *
 * Padrão: Mapper Pattern
 */
export class LocationMapper
  implements AbstractMapper<LocationEntity, PrismaLocation>
{
  /** Converte o modelo Prisma em Entidade de Domínio */
  static toDomain(raw: PrismaLocation): LocationEntity {
    return LocationEntity.create({
      street: raw.street,
      city: raw.city,
      state: raw.state,
      zipcode: raw.zipcode,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });
  }

  /** Converte a Entidade de Domínio em modelo Prisma (para persistência) */
  static toPersistence(entity: LocationEntity): PrismaLocation {
    return {
      id: entity.id.getValue(),
      street: entity.street,
      city: entity.city,
      state: entity.state,
      zipcode: entity.zipcode,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt ?? null,
      deletedAt: entity.deletedAt ?? null,
    };
  }
}
