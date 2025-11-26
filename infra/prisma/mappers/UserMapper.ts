// infra/mappers/UserMapper.ts
import { Prisma, User as UserPrisma } from "@/app/generated/prisma";
import { User } from "@/domain/entities/User";

import { UUIDVO } from "@/shared";

export class UserMapper {
  static toDomain(raw: UserPrisma): User {
    return User.create(
      {
        firstName: raw.firstName,
        lastName: raw.lastName,
        email: raw.email,
        phone: raw.phone,
        role: raw.role,
        image: raw.image ?? "",
      },
      new UUIDVO(raw.id)
    );
  }

  static toPersistence(entity: User): Prisma.UserUncheckedCreateInput {
    return {
      id: entity.id.getValue(),
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      password: entity.password || "",
      phone: entity.phone,
      role: entity.role,
      image: entity.image,
    };
  }
}
