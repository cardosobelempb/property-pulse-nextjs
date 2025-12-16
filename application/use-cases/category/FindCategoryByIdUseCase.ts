import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";
import { Category } from "@/domain/entities/Category";

export class FindCategoryByIdUseCase {
  constructor(private readonly repository: CategoryPrismaRepository) {}

  async execute(id: string): Promise<Category | null> {
    return await this.repository.findById(id);
  }
}
