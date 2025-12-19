// infra/mappers/ImageMapper.ts
import { Image as ImagePrisma, Prisma } from "@/app/generated/prisma";
import { Image } from "@/domain/entities/Image";

import { UUIDVO } from "@/shared";

export class ImageMapper {
  static toDomain(raw: ImagePrisma): Image {
    return Image.create(
      {
        url: raw.url,
        propertyId: UUIDVO.create(raw.id),
        createdAt: raw.createdAt,
      },
      UUIDVO.create(raw.id)
    );
  }

  static toPersistence(entity: Image): Prisma.ImageUncheckedCreateInput {
    return {
      url: entity.url,

      createdAt: entity.createdAt,
    };
  }
}
