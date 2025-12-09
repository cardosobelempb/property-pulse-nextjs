import { Entity, Optional, UUIDVO } from "@/shared";

export interface AmenityProps {
  name: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class Amenity extends Entity<AmenityProps> {
  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
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
    props: Optional<AmenityProps, "createdAt" | "updatedAt" | "deletedAt">,
    id?: UUIDVO
  ) {
    const amenity = new Amenity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.createdAt ?? null,
      },
      id
    );

    return amenity;
  }
}
