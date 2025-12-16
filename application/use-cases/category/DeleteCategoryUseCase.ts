import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";
import { NotFoundError } from "@/shared";

export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryPrismaRepository) {}

  async execute(categoryId: string): Promise<void> {
    const data = await this.categoryRepository.findById(categoryId);

    if (!data) {
      throw new NotFoundError(categoryId);
    }

    await this.categoryRepository.delete(data);
  }
}
