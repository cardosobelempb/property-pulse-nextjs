import { FindPropertyByIdUseCase } from "@/application/use-cases/property/FindPropertyByIdUseCase";
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma/PropertyPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeFindPropertyByIdUseCase() {
  const categoryRepository = new PropertyPrismaRepository();
  return new FindPropertyByIdUseCase(categoryRepository);
}
