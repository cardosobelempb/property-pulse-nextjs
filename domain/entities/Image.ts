import { Entity, Optional, UUIDVO } from "@/shared";

export interface ImageProps {
  id?: UUIDVO;
  propertyId: UUIDVO;
  url: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class Image extends Entity<ImageProps> {
  get url() {
    return this.props.url;
  }

  set url(url: string) {
    this.props.url = url;
  }

  get propertyId() {
    return this.props.propertyId;
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
    props: Optional<ImageProps, "createdAt" | "deletedAt" | "updatedAt">,
    id?: UUIDVO
  ) {
    const image = new Image(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );

    return image;
  }
}
