import { Property } from "@/domain/entities/Property";
import { ImageHttpResponse, ImagePresenter } from "./ImagePresenter";
import { LocationHttpResponse, LocationPresenter } from "./LocationPresenter";
import { RateHttpResponse, RatePresenter } from "./RatePresenter";
import { UserHttpResponse, UserPresenter } from "./UserPresenter";
import {
  PropertyAmenityHttpResponse,
  PropertyAmenityPresenter,
} from "./PropertyAmenityPresenter";
import {
  PropertyAmenityListHttpResponse,
  PropertyAmenityListPresenter,
} from "./PropertyAmenityListPresenter";
import { AmenityPresenter } from "./AmenityPresenter";

export interface PropertyHttpResponse {
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  isFeatured: boolean;

  rate: RateHttpResponse | null;
  location: LocationHttpResponse | null;
  user: UserHttpResponse | null;

  images: ImageHttpResponse[];
  amenities: PropertyAmenityListPresenter; // ← agora correto
  createdAt: Date;
}

export class PropertyPresenter {
  static toHTTP(property: Property): PropertyHttpResponse {
    // console.log("PropertyPresenter=>", property);
    return {
      // id: property.id.getValue(),
      name: property.name,
      type: property.type,
      description: property.description,
      beds: property.beds,
      baths: property.baths,
      squareFeet: property.squareFeet,
      isFeatured: property.isFeatured,

      images: property.images.map(ImagePresenter.toHTTP),

      amenities: property.amenities,

      rate: property.rate ? RatePresenter.toHTTP(property.rate) : null,
      location: property.location
        ? LocationPresenter.toHTTP(property.location)
        : null,
      user: property.user ? UserPresenter.toHTTP(property.user) : null,

      createdAt: property.createdAt,
    };
  }
}
