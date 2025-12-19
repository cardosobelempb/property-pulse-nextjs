// infra/mappers/PropertyMapper.ts

import { Location as LocationPrisma, Prisma } from "@/app/generated/prisma";

import { Property } from "@/domain/entities/Property";
import { UUIDVO } from "@/shared";
import { LocationMapper } from "./LocationMapper";

export interface PropertyMapperProps {
  id?: string;
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  isFeatured?: boolean;
  userId: string;
  rateId: string;
  location: LocationPrisma;
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
        userId: raw.userId,
        rateId: raw.rateId,
        location: LocationMapper.toDomain(raw.location),
        isFeatured: raw.isFeatured,
      },
      UUIDVO.create(raw.id)
    );
  }

  /**
   * Converte a entidade de domínio para o DTO esperado pelo Prisma.
   */
  static toPersistence(entity: Property): Prisma.PropertyUncheckedCreateInput {
    return {
      name: entity.name,
      type: entity.type,
      description: entity.description,
      beds: entity.beds,
      baths: entity.baths,
      squareFeet: entity.squareFeet,
      isFeatured: entity.isFeatured,
      rateId: entity.rateId,
      locationId: entity.location.id?.toString() ?? "",
      userId: entity.userId,
      // ⬇ Relação 1:N com imagens
      // images: {
      //   connect: entity.images?.map((img) => ({ id: img.id.getValue() })) ?? [],
      // },

      // ⬇ Relação N:N com amenities
      // amenities: {
      //   set:
      //     entity.amenities?.map((a) => ({
      //       propertyId_amenityId: {
      //         propertyId: a.propertyId.getValue(),
      //         amenityId: a.amenityId.getValue(),
      //       },
      //     })) ?? [],
      // },
    };
  }
}
