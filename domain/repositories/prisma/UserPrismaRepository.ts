import { UserEntity } from "@/domain/entities/UserEntity";
import { UserRepository } from "../UserRepository";

import { IPagination, prisma } from "@/shared";
import { UserPrismaMapper } from "@/infra/prisma/mappers/UserPrisma.mapper";

export class UserPrismaRepository implements UserRepository {
  async findByName(firstName: string): Promise<UserEntity | null> {
    const user = await prisma.user.findFirst({
      where: { firstName },
    });
    if (!user) {
      return null;
    }

    return UserPrismaMapper.toDomain(user);
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) return null;

    return UserPrismaMapper.toDomain(user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) return null;

    return UserPrismaMapper.toDomain(user);
  }

  async findAll({ page }: IPagination): Promise<UserEntity[]> {
    const users = await prisma.user.findMany({
      take: 20,
      skip: (page - 1) * 20,
      orderBy: {
        createdAt: "desc",
      },
    });

    return users.map(UserPrismaMapper.toDomain);
  }

  async create(entity: UserEntity): Promise<void> {
    const data = UserPrismaMapper.toPersistence(entity);
    await prisma.user.create({ data });
  }

  async update(entity: UserEntity): Promise<void> {
    const data = UserPrismaMapper.toPersistence(entity);
    await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  async delete(entity: UserEntity): Promise<void> {
    const data = UserPrismaMapper.toPersistence(entity);
    await prisma.user.delete({
      where: {
        id: data.id,
      },
    });
  }
}
