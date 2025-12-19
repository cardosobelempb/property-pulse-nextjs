import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";
import { NotFoundError } from "@/shared";

export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryPrismaRepository) {}

  async execute(categoryId: string): Promise<void> {
    const entity = await this.categoryRepository.findById(categoryId);

    if (!entity) {
      throw new NotFoundError(categoryId);
    }

    await this.categoryRepository.delete(entity);
  }
}
