import { FindAllCategoryUseCase } from "@/application/use-cases/category/FindAllCategoryUseCase";
import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeFindAllCategoryUseCase() {
  const categoryRepository = new CategoryPrismaRepository();
  return new FindAllCategoryUseCase(categoryRepository);
}
