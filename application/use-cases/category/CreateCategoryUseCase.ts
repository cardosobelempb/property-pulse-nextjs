import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";
import { Category } from "@/domain/entities/Category";

export namespace CreateCategory {
  /**
   * Dados necessários APENAS para criar uma categoria
   * Nada além disso.
   */
  export interface Input {
    name: string;
    description?: string;
  }

  /**
   * O que o caso de uso retorna
   */

  export type Output = {
    category: Category;
  };
}

export class CreateCategoryUseCase {
  constructor(private readonly repository: CategoryPrismaRepository) {}

  async execute({
    name,
    description,
  }: CreateCategory.Input): Promise<CreateCategory.Output> {
    const entity = Category.create({ name, description });
    const category = await this.repository.insert(entity);
    return { category };
  }
}
