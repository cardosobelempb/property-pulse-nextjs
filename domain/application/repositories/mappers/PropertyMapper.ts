// infra/mappers/PropertyMapper.ts

import {
  Image as ImagePrisma,
  Location as LocationPrisma,
  Property as PropertyPrisma,
  Amenity as AmenityPrisma,
  Rate as RatePrisma,
  User as UserPrisma,
  Prisma,
} from "@/app/generated/prisma";

import { Property } from "@/domain/entities/Property";
import { UUIDVO } from "@/shared";

import { ImageMapper } from "./ImageMapper";
import { LocationMapper } from "./LocationMapper";
import { PropertyAmenityMapper } from "./PropertyAmenityMapper";
import { RateMapper } from "./RateMapper";
import { UserMapper } from "./UserMapper";

export interface PropertyMapperProps extends PropertyPrisma {
  rate: RatePrisma;
  location: LocationPrisma;
  user: UserPrisma;
  images: ImagePrisma[];
  amenities: {
    propertyId: string;
    amenityId: string;
    amenity: AmenityPrisma;
  }[];
}

export class PropertyMapper {
  /**
   * Converte o objeto do Prisma (infra) para uma entidade
   * do domínio (DDD). Aqui ocorre toda a limpeza e conversão.
   */
  static toDomain(raw: PropertyMapperProps): Property {
    return Property.create(
      {
        name: raw.name,
        type: raw.type,
        description: raw.description,
        beds: raw.beds,
        baths: raw.baths,
        squareFeet: raw.squareFeet,

        images: raw.images.map(ImageMapper.toDomain),

        amenities: raw.amenities.map((pivot) =>
          PropertyAmenityMapper.toDomain({
            propertyId: pivot.propertyId,
            amenityId: pivot.amenityId,
            amenity: pivot.amenity,
          })
        ),

        rateId: new UUIDVO(raw.rate.id),
        rate: RateMapper.toDomain(raw.rate),
        locationId: new UUIDVO(raw.location.id),
        location: LocationMapper.toDomain(raw.location),
        userId: new UUIDVO(raw.user.id),
        user: UserMapper.toDomain(raw.user),

        isFeatured: raw.isFeatured,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        deletedAt: raw.deletedAt,
      },
      new UUIDVO(raw.id)
    );
  }

  /**
   * Converte a entidade de domínio para o DTO esperado pelo Prisma.
   */
  static toPersistence(
    entity: Property
  ): Prisma.PropertyUncheckedCreateInput & Prisma.PropertyUncheckedUpdateInput {
    return {
      name: entity.name,
      type: entity.type,
      description: entity.description,
      beds: entity.beds,
      baths: entity.baths,
      squareFeet: entity.squareFeet,
      isFeatured: entity.isFeatured,
      rateId: entity.rateId.getValue(),
      locationId: entity.locationId.getValue(),
      userId: entity.userId.getValue(),
      deletedAt: entity.deletedAt,

      // ⬇ Relação 1:N com imagens
      images: {
        connect: entity.images?.map((img) => ({ id: img.id.getValue() })) ?? [],
      },

      // ⬇ Relação N:N com amenities
      amenities: {
        set:
          entity.amenities?.map((a) => ({
            propertyId_amenityId: {
              propertyId: a.propertyId.getValue(),
              amenityId: a.amenityId.getValue(),
            },
          })) ?? [],
      },
    };
  }
}
