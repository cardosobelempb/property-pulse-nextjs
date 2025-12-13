// infra/mappers/CategoryMapper.ts
import { Prisma, Category as CategoryPrisma } from "@/app/generated/prisma";
import { Category } from "@/domain/entities/Category";

import { UUIDVO } from "@/shared";

export class CategoryMapper {
  static toDomain(raw: CategoryPrisma): Category {
    return Category.create(
      {
        name: raw.name,
      },
      new UUIDVO(raw.id)
    );
  }

  static toPersistence(entity: Category): Prisma.CategoryUncheckedCreateInput {
    return {
      id: entity.id.getValue(),
      name: entity.name,
    };
  }
}
