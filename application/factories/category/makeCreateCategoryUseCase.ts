import { CreateCategoryUseCase } from "@/application/use-cases/category/CreateCategoryUseCase";
import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeCreateCategoryUseCase() {
  const categoryRepository = new CategoryPrismaRepository();
  return new CreateCategoryUseCase(categoryRepository);
}
