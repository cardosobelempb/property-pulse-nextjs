import { Entity, Optional, UUIDVO, WatchedListAbstract } from "@/shared";
import { Amenity, AmenityProps } from "./Amenity";

export interface PropertyAmenityProps extends AmenityProps {
  propertyId: UUIDVO;
  amenityId: UUIDVO;
}

export class PropertyAmenity extends Amenity<PropertyAmenityProps> {
  get propertyId() {
    return this.props.propertyId;
  }

  get amenityId() {
    return this.props.amenityId;
  }

  static create(
    props: Optional<PropertyAmenityProps, "createdAt" | "name">,
    id?: UUIDVO
  ): PropertyAmenity {
    const propertyAmenity = new PropertyAmenity(
      {
        ...props,
        name: props.name ?? "",
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return propertyAmenity;
  }
}
