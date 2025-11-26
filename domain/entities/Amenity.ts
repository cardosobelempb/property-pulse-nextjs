import { Entity, Optional, UUIDVO } from "@/shared";

export interface AmenityProps {
  id?: UUIDVO;
  name: string;
  createdAt: Date;
  updatedAt?: Date | null | undefined;
  deletedAt?: Date | null | undefined;
}

export class Amenity<Props extends AmenityProps> extends Entity<Props> {
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
    props: Optional<AmenityProps, "createdAt" | "name">,
    id?: UUIDVO
  ) {
    const amenity = new Amenity(
      {
        ...props,
        name: props.name ?? "",
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return amenity;
  }
}
