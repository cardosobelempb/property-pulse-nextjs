import { Property } from "@/domain/entities/Property";
import { LocationPresenter, LocationPresenterProps } from "./LocationPresenter";
import { LocationProps } from "@/domain/entities/Location";

export interface PropertyPresenterProps {
  id: string;
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  isFeatured?: boolean;
  userId: string;
  rateId: string;
  location: LocationPresenterProps;
  createdAt: Date;
}

export class PropertyPresenter {
  static toHTTP(property: Property): PropertyPresenterProps {
    return {
      id: property.id.toString(),
      name: property.name,
      type: property.type,
      description: property.description,
      beds: property.beds,
      baths: property.baths,
      squareFeet: property.squareFeet,
      isFeatured: property.isFeatured,
      location: LocationPresenter.toHTTP(property.location),
      rateId: property.rateId,
      userId: property.userId,
      createdAt: property.createdAt ?? new Date(),
    };
  }

  /**
   * Converte uma lista de entidades para DTOs HTTP
   * Evita repetição de `.map()` espalhado pelo código
   */
  static toHTTPList(entities: Property[]): PropertyPresenterProps[] {
    return entities.map(PropertyPresenter.toHTTP);
  }
}
