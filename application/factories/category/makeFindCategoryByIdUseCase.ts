import { FindCategoryByIdUseCase } from "@/application/use-cases/category/FindCategoryByIdUseCase";
import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeFindCategoryByIdUseCase() {
  const categoryRepository = new CategoryPrismaRepository();
  return new FindCategoryByIdUseCase(categoryRepository);
}
