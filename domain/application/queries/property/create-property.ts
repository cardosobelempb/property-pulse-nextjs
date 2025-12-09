import { Property } from "@/domain/entities/Property";

import { UUIDVO } from "@/shared";
import { PropertyAmenity } from "@/domain/entities/PropertyAmenity";
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma";
import { PropertyAmenityList } from "@/domain/entities/PropertyAmenityList";

interface CreatePropertyRequest {
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  rateId: string;
  isFeatured: boolean;
  locationId: string;
  userId: string;
  amenityIds: string[];
}

interface CreatePropertyResponse {
  property: Property;
}

export async function createProperty({
  name,
  baths,
  beds,
  description,
  isFeatured,
  locationId,
  rateId,
  squareFeet,
  type,
  userId,
  amenityIds,
}: CreatePropertyRequest): Promise<CreatePropertyResponse> {
  const repository = new PropertyPrismaRepository();

  const property = Property.create({
    name,
    type,
    description,
    beds,
    baths,
    squareFeet,
    rateId: new UUIDVO(rateId),
    isFeatured,
    locationId: new UUIDVO(locationId),
    userId: new UUIDVO(userId),
  });

  const propertyAmenitys = amenityIds.map((amenityId) => {
    return PropertyAmenity.create({
      amenityId: new UUIDVO(amenityId),
      propertyId: property.id,
    });
  });

  property.updateAmenities(new PropertyAmenityList(propertyAmenitys));

  await repository.create(property);
  return { property };
}
