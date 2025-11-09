import { Rate as PrismaRate } from "@/app/generated/prisma";
import { RateEntity } from "@/domain/entities/RateEntity";
import { AbstractMapper, UUIDVO } from "@/shared";

/**
 * Responsável por converter dados entre
 * o modelo Prisma (persistência) e o modelo de Domínio.
 *
 * Padrão: Mapper Pattern
 */
export class RateMapper implements AbstractMapper<RateEntity, PrismaRate> {
  /** Converte o modelo Prisma em Entidade de Domínio */
  static toDomain(raw: PrismaRate): RateEntity {
    return RateEntity.create({
      weekly: raw.weekly ?? 0,
      monthly: raw.monthly ?? 0,
      nightly: raw.nightly ?? 0,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });
  }

  /** Converte a Entidade de Domínio em modelo Prisma (para persistência) */
  static toPersistence(entity: RateEntity): PrismaRate {
    return {
      id: entity.id.getValue(),
      weekly: entity.weekly ?? 0,
      monthly: entity.monthly ?? 0,
      nightly: entity.nightly ?? 0,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt ?? null,
      deletedAt: entity.deletedAt ?? null,
    };
  }
}
