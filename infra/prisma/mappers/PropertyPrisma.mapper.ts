// src/infra/prisma/mappers/property.mapper.ts
import {
  Amenity,
  Image,
  Location,
  Property,
  PropertyAmenity,
  Rate,
  User,
} from "@/app/generated/prisma";
import { ImageMapper } from "./ImagePrisma.mapper";

import { PropertyEntity } from "@/domain/entities/PropertyEntity";
import { AbstractMapper, UUIDVO } from "@/shared";
import { AmenityMapper } from "./Amenity.mapper";

export interface PrismaProperty extends Property {
  user?: User;
  rate?: Rate;
  location?: Location;
  images?: Image[];
  amenities?: Amenity[];
}

export class PropertyPrismaMapper
  implements AbstractMapper<PropertyEntity, PrismaProperty>
{
  static toDomain(raw: PrismaProperty): PropertyEntity {
    return PropertyEntity.create({
      name: raw.name,
      type: raw.type,
      description: raw.description,
      beds: raw.beds,
      baths: raw.baths,
      squareFeet: raw.squareFeet,
      isFeatured: raw.isFeatured,
      rateId: new UUIDVO(raw.rateId),
      locationId: new UUIDVO(raw.locationId),
      userId: new UUIDVO(raw.userId),
      images: raw.images?.map(ImageMapper.toDomain) ?? [],
      amenities: raw.amenities?.map((a) => AmenityMapper.toDomain(a)) ?? [],
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      deletedAt: raw.deletedAt,
    });
  }

  static toPersistence(domain: PropertyEntity): PrismaProperty {
    return {
      id: domain.id?.getValue(),
      name: domain.name,
      type: domain.type,
      description: domain.description,
      beds: domain.beds,
      baths: domain.baths,
      squareFeet: domain.squareFeet,
      isFeatured: domain.isFeatured,
      rateId: domain.rateId?.getValue(),
      locationId: domain.locationId?.getValue(),
      userId: domain.userId?.getValue(),
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt ?? null,
      deletedAt: domain.deletedAt ?? null,
    };
  }
}

/**
// ✅ Exemplo de uso
const prismaUser: PrismaUser = { id: '1', name: 'Ana', email: 'ana@email.com' };
const domainUser = UserMapper.toDomain(prismaUser);

console.log(domainUser instanceof UserEntity); // true
 */
