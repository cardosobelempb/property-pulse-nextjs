import { CategoryRepository } from "@/domain/application/repositories/CategoryRepository";
import { Category } from "@/domain/entities/Category";

/**
 * Namespace responsável apenas pelos contratos do Use Case
 * (entrada e saída).
 */
export namespace FindAllCategory {
  /**
   * DTO de entrada do caso de uso.
   * NÃO depende de HTTP, Next.js ou framework algum.
   */
  export interface Input {
    page: number;
  }

  /**
   * DTO de saída do caso de uso.
   */
  export interface Output {
    categories: Category[];
  }
}

/**
 * Caso de uso responsável por buscar categorias paginadas.
 *
 * ✔️ Independente de framework
 * ✔️ Testável
 * ✔️ Focado apenas na regra de negócio
 */
export class FindAllCategoryUseCase {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(input: FindAllCategory.Input): Promise<FindAllCategory.Output> {
    const { page } = input;

    const categories = await this.repository.findAll({ page });

    return { categories };
  }
}
