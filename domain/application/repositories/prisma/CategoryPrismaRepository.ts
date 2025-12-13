import { User } from "@/domain/entities/User";
import { UserRepository } from "../UserRepository";

import { IPagination, prisma } from "@/shared";
import { UserMapper } from "@/domain/application/repositories/mappers/UserMapper";
import { Category } from "@/domain/entities/Category";
import { CategoryRepository } from "../CategoryRepository";
import { CategoryMapper } from "../mappers/CategoryMapper";

export class CategoryPrismaRepository implements CategoryRepository {
  async findById(id: string): Promise<Category | null> {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    if (!category) return null;

    return CategoryMapper.toDomain(category);
  }

  async findAll({ page }: IPagination): Promise<Category[]> {
    const categorys = await prisma.category.findMany({
      take: 20,
      skip: (page - 1) * 20,
      orderBy: {
        createdAt: "desc",
      },
    });

    return categorys.map(CategoryMapper.toDomain);
  }

  async create(entity: Category): Promise<void> {
    const data = CategoryMapper.toPersistence(entity);
    await prisma.category.create({ data });
  }

  async update(entity: Category): Promise<void> {
    const data = CategoryMapper.toPersistence(entity);
    await prisma.category.update({
      where: {
        id: data.id,
      },
      data,
    });
  }

  async delete(entity: Category): Promise<void> {
    const data = CategoryMapper.toPersistence(entity);
    await prisma.category.delete({
      where: {
        id: data.id,
      },
    });
  }
}
