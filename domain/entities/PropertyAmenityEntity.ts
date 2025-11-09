import { Entity, UUIDVO } from "@/shared";

export interface PropertyAmenityEntityProps {
  propertyId: string;
  amenityId: string;
}

export class PropertyAmenityEntity extends Entity<PropertyAmenityEntityProps> {
  get propertyId() {
    return this.props.propertyId;
  }

  set propertyId(propertyId: string) {
    this.props.propertyId = propertyId;
  }

  get amenityId() {
    return this.props.amenityId;
  }

  static create(props: PropertyAmenityEntityProps, id?: UUIDVO) {
    const PropertyAmenity = new PropertyAmenityEntity(
      {
        ...props,
      },
      id
    );

    return PropertyAmenity;
  }
}
