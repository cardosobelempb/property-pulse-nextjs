import { CreatePropertyUseCase } from "@/application/use-cases/property/CreatePropertyUseCase";
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma/PropertyPrismaRepository";

/**
 * Factory responsável por montar o caso de uso
 * Centraliza dependências e facilita testes
 */
export function makeCreatePropertyUseCase() {
  const propertyRepository = new PropertyPrismaRepository();
  return new CreatePropertyUseCase(propertyRepository);
}
