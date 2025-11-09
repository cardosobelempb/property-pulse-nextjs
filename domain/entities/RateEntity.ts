import { Entity, Optional, UUIDVO } from "@/shared";

export interface RateProps {
  weekly?: number;
  monthly?: number;
  nightly?: number;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class RateEntity extends Entity<RateProps> {
  get weekly() {
    return this.props.weekly;
  }

  set weekly(weekly: number | undefined) {
    this.props.weekly = weekly;
  }

  get monthly() {
    return this.props.monthly;
  }

  set monthly(monthly: number | undefined) {
    this.props.monthly = monthly;
  }

  get nightly() {
    return this.props.nightly;
  }

  set nightly(nightly: number | undefined) {
    this.props.nightly = nightly;
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

  static create(props: Optional<RateProps, "createdAt">, id?: UUIDVO) {
    const Rate = new RateEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return Rate;
  }
}
