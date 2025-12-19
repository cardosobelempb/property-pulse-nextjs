import { CategoryPrismaRepository } from "@/domain/application/repositories/prisma/CategoryPrismaRepository";
import { Category } from "@/domain/entities/Category";
import { CategoryPresenter } from "@/infra/presenters/CategoryPresenter";
import { NotFoundError } from "@/shared";

export namespace UpdateCategory {
  /**
   * Dados necessários APENAS para criar uma categoria
   * Nada além disso.
   */
  export interface Input {
    name: string;
    description: string;
  }

  /**
   * O que o caso de uso retorna
   */

  export type Output = {
    category: Category;
  };
}

export class UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryPrismaRepository) {}

  async execute(
    categoryId: string,
    input: UpdateCategory.Input
  ): Promise<UpdateCategory.Output> {
    const entity = await this.categoryRepository.findById(categoryId);

    if (!entity) {
      throw new NotFoundError(categoryId);
    }

    this.copyInputToEntity(input, entity);

    const category = await this.categoryRepository.edit(categoryId, entity);

    return { category };
  }

  private copyInputToEntity(
    input: UpdateCategory.Input,
    entity: Category
  ): void {
    entity.updateName(input.name);
    entity.updateDescription(input.description);
  }
}
