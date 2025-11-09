import { Entity, Optional, UUIDVO } from "@/shared";

export interface ImageProps {
  propertyId: UUIDVO;
  url: string;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class ImageEntity extends Entity<ImageProps> {
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

  static create(props: Optional<ImageProps, "createdAt">, id?: UUIDVO) {
    const Image = new ImageEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return Image;
  }
}
