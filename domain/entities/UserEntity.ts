import { Entity, Optional, UUIDVO } from "@/shared";

export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  role: number;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}

export class UserEntity extends Entity<UserProps> {
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

  static create(props: Optional<UserProps, "createdAt">, id?: UUIDVO) {
    const User = new UserEntity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return User;
  }
}
