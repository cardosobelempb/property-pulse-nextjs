import { Entity, Optional, UUIDVO } from "@/shared";

export interface LocationProps {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class Location extends Entity<LocationProps> {
  get street() {
    return this.props.street;
  }

  set street(street: string) {
    this.props.street = street;
  }

  get city() {
    return this.props.city;
  }

  set city(city: string) {
    this.props.city = city;
  }

  get state() {
    return this.props.state;
  }

  set state(state: string) {
    this.props.state = state;
  }

  get zipcode() {
    return this.props.zipcode;
  }

  set zipcode(zipcode: string) {
    this.props.zipcode = zipcode;
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
    props: Optional<LocationProps, "createdAt" | "deletedAt" | "updatedAt">,
    id?: UUIDVO
  ) {
    const location = new Location(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );

    return location;
  }
}
