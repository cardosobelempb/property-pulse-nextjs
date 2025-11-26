import { Entity, UUIDVO, WatchedListAbstract } from "@/shared";
import { PropertyAmenity } from "./PropertyAmenity";

export interface PropertyAmenityProps {
  propertyId: string;
  amenityId: string;
}

export class PropertyAmenityList extends WatchedListAbstract<PropertyAmenity> {
  compareItems(a: PropertyAmenity, b: PropertyAmenity): boolean {
    return a.propertyId.equals(b.propertyId);
  }
}
