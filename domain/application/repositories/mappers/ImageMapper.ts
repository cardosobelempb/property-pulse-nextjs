// infra/mappers/ImageMapper.ts
import { Image as ImagePrisma, Prisma } from "@/app/generated/prisma";
import { Image } from "@/domain/entities/Image";

import { UUIDVO } from "@/shared";

export class ImageMapper {
  static toDomain(raw: ImagePrisma): Image {
    return Image.create(
      {
        url: raw.url,
        propertyId: new UUIDVO(raw.propertyId),
        createdAt: raw.createdAt,
      },
      new UUIDVO(raw.id)
    );
  }

  static toPersistence(entity: Image): Prisma.ImageUncheckedCreateInput {
    return {
      id: entity.id.getValue(),
      url: entity.url,
      propertyId: entity.propertyId.getValue(),
      createdAt: entity.createdAt,
    };
  }
}
