import { DeleteCategoryUseCase } from "@/application/use-cases/category/DeleteCategoryUseCase";
import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeDeleteCategoryUseCase() {
  const categoryRepository = new CategoryPrismaRepository();
  return new DeleteCategoryUseCase(categoryRepository);
}
