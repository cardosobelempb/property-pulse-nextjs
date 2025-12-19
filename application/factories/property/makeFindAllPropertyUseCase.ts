import { FindAllPropertyUseCase } from "@/application/use-cases/property/FindAllPropertyUseCase";
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma/PropertyPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeFindAllPropertyUseCase() {
  const categoryRepository = new PropertyPrismaRepository();
  return new FindAllPropertyUseCase(categoryRepository);
}
