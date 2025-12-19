// infra/mappers/UserMapper.ts
import { Prisma, User as UserPrisma } from "@/app/generated/prisma";
import { Roles } from "@/domain/entities/enums/Roles";
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
        role: Roles[raw.role],
        image: raw.image ?? "",
        birthDate: raw.birthDate ?? null,
      },
      UUIDVO.create(raw.id)
    );
  }

  static toPersistence(entity: User): Prisma.UserUncheckedCreateInput {
    return {
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      password: entity.password ?? "",
      phone: entity.phone,
      image: entity.image,
    };
  }
}
