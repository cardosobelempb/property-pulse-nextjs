import { Image as PrismaImage } from "@/app/generated/prisma";
import { ImageEntity } from "@/domain/entities/ImageEntity";
import { AbstractMapper, UUIDVO } from "@/shared";

/**
 * Responsável por converter dados entre
 * o modelo Prisma (persistência) e o modelo de Domínio.
 *
 * Padrão: Mapper Pattern
 */
export class ImageMapper implements AbstractMapper<ImageEntity, PrismaImage> {
  /** Converte o modelo Prisma em Entidade de Domínio */
  static toDomain(raw: PrismaImage): ImageEntity {
    return ImageEntity.create({
      propertyId: new UUIDVO(raw.propertyId),
      url: raw.url,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });
  }

  /** Converte a Entidade de Domínio em modelo Prisma (para persistência) */
  static toPersistence(entity: ImageEntity): PrismaImage {
    return {
      id: entity.id.getValue(),
      propertyId: entity.propertyId.getValue(),
      url: entity.url,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt ?? null,
      deletedAt: entity.deletedAt ?? null,
    };
  }
}
