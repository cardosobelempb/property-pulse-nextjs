import { Category } from "@/domain/entities/Category";
import { IPagination, prisma } from "@/shared";
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

  async findAll({
    page,
    size = 20,
    direction,
    sort,
  }: IPagination): Promise<Category[]> {
    const categorys = await prisma.category.findMany({
      take: size,
      skip: (page - 1) * size,
      orderBy: {
        createdAt: direction,
      },
    });

    return categorys.map(CategoryMapper.toDomain);
  }

  async create(entity: Category): Promise<void> {
    const data = CategoryMapper.toPersistence(entity);
    await prisma.category.create({ data });
  }

  async insert(entity: Category): Promise<Category> {
    const data = CategoryMapper.toPersistence(entity);
    const category = await prisma.category.create({ data });
    return CategoryMapper.toDomain(category);
  }

  async update(entity: Category): Promise<void> {
    const data = CategoryMapper.toPersistence(entity);
    await prisma.category.update({
      data,
      where: {
        id: entity.id.getValue(),
      },
    });
  }

  async edit(id: string, entity: Category): Promise<Category> {
    const data = CategoryMapper.toPersistence(entity);
    const category = await prisma.category.update({
      data,
      where: {
        id,
      },
    });
    return CategoryMapper.toDomain(category);
  }

  async destroy(id: string, entity: Category): Promise<void> {
    await prisma.category.delete({
      where: {
        id,
      },
    });
  }

  async delete(entity: Category): Promise<void> {
    await prisma.category.delete({
      where: {
        id: entity.id.getValue(),
      },
    });
  }
}
