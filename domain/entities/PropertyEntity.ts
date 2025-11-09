import { Entity, Optional, UUIDVO } from "@/shared";
import { AmenityEntity } from "./AmenityEntity";
import { ImageEntity } from "./ImageEntity";

export type PropertyProps = {
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  amenities: AmenityEntity[];
  rateId: UUIDVO;
  images: ImageEntity[];
  isFeatured: boolean;
  locationId: UUIDVO;
  userId: UUIDVO;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
};

export class PropertyEntity extends Entity<PropertyProps> {
  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get type() {
    return this.props.type;
  }

  set type(type: string) {
    this.props.type = type;
  }

  get description() {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
  }

  get beds() {
    return this.props.beds;
  }

  set beds(beds: number) {
    this.props.beds = beds;
  }

  get baths() {
    return this.props.beds;
  }

  set baths(beds: number) {
    this.props.beds = beds;
  }

  get squareFeet() {
    return this.props.squareFeet;
  }

  set squareFeet(squareFeet: number) {
    this.props.squareFeet = squareFeet;
  }

  get amenities() {
    return this.props.amenities;
  }

  set amenities(amenities: AmenityEntity[]) {
    this.props.amenities = amenities;
  }

  get rateId() {
    return this.props.rateId;
  }

  get images() {
    return this.props.images;
  }

  set images(image: ImageEntity[]) {
    this.props.images = image;
  }

  get isFeatured() {
    return this.props.isFeatured;
  }

  get userId() {
    return this.props.userId;
  }

  get locationId() {
    return this.props.locationId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get deletedAt() {
    return this.props.deletedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(props: Optional<PropertyProps, "createdAt">, id?: UUIDVO) {
    const Property = new PropertyEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return Property;
  }
}
