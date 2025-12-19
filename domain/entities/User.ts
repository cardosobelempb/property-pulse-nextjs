import { Entity, Optional, UUIDVO } from "@/shared";
import { Order } from "./Order";
import { Roles } from "./enums/Roles";

export interface UserProps {
  id?: UUIDVO;
  firstName: string;
  lastName: string;
  email: string;
  password?: string | null;
  phone: string;
  image: string;
  birthDate: Date | null;
  role: Roles;
  // orders: Order[];
  createdAt?: Date;
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

  set birthDate(birthDate: Date | null) {
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

  set role(role: Roles) {
    this.props.role = role;
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
      UserProps,
      "role" | "createdAt" | "deletedAt" | "updatedAt"
    >,
    id?: UUIDVO
  ) {
    const user = new User(
      {
        ...props,
        // orders: props.orders ?? [],
        role: props.role ?? Roles.CLIENT,
        createdAt: props.createdAt ?? new Date(),
        birthDate: props.birthDate ?? null,
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );

    return user;
  }
}
