import { Entity, Optional, UUIDVO } from "@/shared";
import { Order } from "./Order";

export interface UserProps {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string | null;
  phone: string;
  image: string;
  birthDate: Date;
  role: number;
  orders: Order[];
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class User extends Entity<UserProps> {
  get firstName() {
    return this.props.firstName;
  }

  set firstName(firstName: string) {
    this.props.firstName = firstName;
  }

  get lastName() {
    return this.props.lastName;
  }

  set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  get email() {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get password() {
    return this.props.password;
  }

  get phone() {
    return this.props.phone;
  }

  set phone(phone: string) {
    this.props.phone = phone;
  }

  get birthDate() {
    return this.props.birthDate;
  }

  set birthDate(birthDate: Date) {
    this.props.birthDate = birthDate;
  }

  get image() {
    return this.props.image;
  }

  set image(image: string) {
    this.props.image = image;
  }

  get role() {
    return this.props.role;
  }

  set role(role: number) {
    this.props.role = role;
  }

  set orders(orders: Order[]) {
    this.props.orders = orders;
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
    props: Optional<UserProps, "createdAt" | "deletedAt" | "updatedAt">,
    id?: UUIDVO
  ) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );

    return user;
  }
}
