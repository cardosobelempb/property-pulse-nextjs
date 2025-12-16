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
    id: string,
    { name, description }: UpdateCategory.Input
  ): Promise<UpdateCategory.Output> {
    const data = await this.categoryRepository.findById(id);

    if (!data) {
      throw new NotFoundError(id);
    }

    data.updateName(name);
    data.updateDescription(description);

    const category = await this.categoryRepository.edit(id, data);

    return { category };
  }
}
