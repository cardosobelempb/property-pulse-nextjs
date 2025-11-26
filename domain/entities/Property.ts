import { AggregateAbstract, Entity, Optional, UUIDVO } from "@/shared";
import { Image } from "./Image";
import { Location } from "./Location";
import { PropertyAmenityList } from "./PropertyAmenityList";
import { Rate } from "./Rate";
import { User } from "./User";

export type PropertyProps = {
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  amenities?: PropertyAmenityList;
  images?: Image[];
  rate: Rate;
  isFeatured: boolean;
  location: Location;
  user: User;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
};

export class Property extends AggregateAbstract<PropertyProps> {
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

  set amenities(amenities: PropertyAmenityList | undefined) {
    this.props.amenities = amenities;
  }

  get images() {
    return this.props.images;
  }

  set images(image: Image[] | undefined) {
    this.props.images = image;
  }

  get isFeatured() {
    return this.props.isFeatured;
  }

  get rate() {
    return this.props.rate;
  }

  get user() {
    return this.props.user;
  }

  get location() {
    return this.props.location;
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

  static create(
    props: Optional<
      PropertyProps,
      "createdAt" | "images" | "amenities" | "deletedAt" | "updatedAt"
    >,
    id?: UUIDVO
  ) {
    const property = new Property(
      {
        ...props,
        images: props.images ?? [],
        amenities: props.amenities ?? new PropertyAmenityList(),
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );

    return property;
  }
}
