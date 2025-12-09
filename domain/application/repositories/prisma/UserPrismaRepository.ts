import { User } from "@/domain/entities/User";
import { UserRepository } from "../UserRepository";

import { IPagination, prisma } from "@/shared";
import { UserMapper } from "@/domain/application/repositories/mappers/UserMapper";

export class UserPrismaRepository implements UserRepository {
  async findByName(firstName: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: { firstName },
    });
    if (!user) {
      return null;
    }

    return UserMapper.toDomain(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) return null;

    return UserMapper.toDomain(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) return null;

    return UserMapper.toDomain(user);
  }

  async findAll({ page }: IPagination): Promise<User[]> {
    const users = await prisma.user.findMany({
      take: 20,
      skip: (page - 1) * 20,
      orderBy: {
        createdAt: "desc",
      },
    });

    return users.map(UserMapper.toDomain);
  }

  async create(entity: User): Promise<void> {
    const data = UserMapper.toPersistence(entity);
    await prisma.user.create({ data });
  }

  async update(entity: User): Promise<void> {
    const data = UserMapper.toPersistence(entity);
    await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  async delete(entity: User): Promise<void> {
    const data = UserMapper.toPersistence(entity);
    await prisma.user.delete({
      where: {
        id: data.id,
      },
    });
  }
}
