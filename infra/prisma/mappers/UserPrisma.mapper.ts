import { User as PrismaUser } from "@/app/generated/prisma";
import { UserEntity } from "@/domain/entities/UserEntity";
import { AbstractMapper, UUIDVO } from "@/shared";

/**
 * Responsável por converter dados entre
 * o modelo Prisma (persistência) e o modelo de Domínio.
 *
 * Padrão: Mapper Pattern
 */
export class UserPrismaMapper
  implements AbstractMapper<UserEntity, PrismaUser>
{
  /** Converte o modelo Prisma em Entidade de Domínio */
  static toDomain(raw: PrismaUser): UserEntity {
    return UserEntity.create({
      firstName: raw.firstName,
      lastName: raw.lastName,
      email: raw.email,
      password: raw.password,
      phone: raw.phone,
      image: raw.image ?? "",
      role: raw.role,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });
  }

  /** Converte a Entidade de Domínio em modelo Prisma (para persistência) */
  static toPersistence(entity: UserEntity): PrismaUser {
    return {
      id: entity.id.getValue(),
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      password: entity.password,
      phone: entity.phone,
      image: entity.image ?? null,
      role: entity.role,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt ?? null,
      deletedAt: entity.deletedAt ?? null,
    };
  }
}
