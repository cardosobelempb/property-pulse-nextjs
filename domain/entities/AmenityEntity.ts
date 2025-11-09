import { Entity, Optional, UUIDVO } from "@/shared";

export interface AmenityProps {
  name: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class AmenityEntity extends Entity<AmenityProps> {
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

  static create(props: Optional<AmenityProps, "createdAt">, id?: UUIDVO) {
    const Amenity = new AmenityEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return Amenity;
  }
}
