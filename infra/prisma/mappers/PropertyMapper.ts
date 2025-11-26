// infra/mappers/PropertyMapper.ts

import {
  Image,
  Location,
  Property as PropertyPrisma,
  Rate,
  User,
} from "@/app/generated/prisma";
import { Property } from "@/domain/entities/Property";
import { UUIDVO } from "@/shared";
import { ImageMapper } from "./ImageMapper";
import { LocationMapper } from "./LocationMapper";
import { RateMapper } from "./RateMapper";
import { UserMapper } from "./UserMapper";

export type PropertyMapperProps = PropertyPrisma & {
  images: Image[];
  rate: Rate;
  location: Location;
  user: User;
};

export class PropertyMapper {
  static toDomain(raw: PropertyMapperProps): Property {
    return Property.create(
      {
        name: raw.name,
        type: raw.type,
        description: raw.description,
        beds: raw.beds,
        baths: raw.baths,
        squareFeet: raw.squareFeet,
        images: raw.images?.map((image) => ImageMapper.toDomain(image)),

        rate: RateMapper.toDomain(raw.rate),
        location: LocationMapper.toDomain(raw.location),
        user: UserMapper.toDomain(raw.user),

        isFeatured: raw.isFeatured,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        deletedAt: raw.deletedAt,
      },
      new UUIDVO(raw.id)
    );
  }

  static toPersistence(entity: Property) {
    return {
      id: entity.id.getValue(),
      name: entity.name,
      type: entity.type,
      description: entity.description,
      beds: entity.beds,
      baths: entity.baths,
      squareFeet: entity.squareFeet,
      isFeatured: entity.isFeatured,

      rateId: entity.rate.id.getValue(),
      locationId: entity.location.id.getValue(),
      userId: entity.user.id.getValue(),

      deletedAt: entity.deletedAt,

      images: {
        connect: entity.images?.map((i) => ({ id: i.id.getValue() })) ?? [],
      },
    };
  }
}
