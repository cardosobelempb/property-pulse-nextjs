import { UpdateCategoryUseCase } from "@/application/use-cases/category/UpdateCategoryUseCase";
import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeUpdateCategoryUseCase() {
  const categoryRepository = new CategoryPrismaRepository();
  return new UpdateCategoryUseCase(categoryRepository);
}
