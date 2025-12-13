import { Category } from "@/domain/entities/Category";
import { RepositoryAbstract } from "@/shared/domain/common/abstract/RepositoryAbstract";

export abstract class CategoryRepository extends RepositoryAbstract<Category> {}
