import { Entity, Optional, UUIDVO } from "@/shared";

export interface RateProps {
  id?: UUIDVO;
  weekly?: number;
  monthly?: number;
  nightly?: number;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class Rate extends Entity<RateProps> {
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

  static create(
    props: Optional<
      RateProps,
      "monthly" | "nightly" | "weekly" | "createdAt" | "deletedAt" | "updatedAt"
    >,
    id?: UUIDVO
  ) {
    const rate = new Rate(
      {
        ...props,
        monthly: props.monthly ?? 0,
        nightly: props.nightly ?? 0,
        weekly: props.weekly ?? 0,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );

    return rate;
  }
}
