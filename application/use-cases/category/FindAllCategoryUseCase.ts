import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";
import { CategoryPresenter } from "@/infra/presenters/CategoryPresenter";
import { IPagination } from "@/shared";
import {} from "@/shared/domain/common/";

/**
 * Namespace responsável apenas pelos contratos do Use Case
 * (entrada e saída).
 */
export namespace FindAllCategory {
  /**
   * DTO de entrada do caso de uso.
   * NÃO depende de HTTP, Next.js ou framework algum.
   */
  export interface Input extends IPagination {}
  // export interface Input extends NextRequest {}

  /**
   * DTO de saída do caso de uso.
   */
  export interface Output {
    categories: CategoryPresenter[];
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
  constructor(private readonly repository: CategoryPrismaRepository) {}

  async execute(input: FindAllCategory.Input): Promise<FindAllCategory.Output> {
    const { page, size, direction } = input;

    const result = await this.repository.findAll({
      page,
      size,
      direction,
    });
    const categories = CategoryPresenter.toHTTPList(result);
    return {
      categories,
    };

    // const pageParam = input.nextUrl.searchParams.get("page");
    // const page = pageParam ? Number(pageParam) : 1;
    // const categories = await this.repository.findAll({ page });
    // return { categories };
  }
}
