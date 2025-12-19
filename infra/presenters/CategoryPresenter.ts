import { Category } from "@/domain/entities/Category";
import { Image } from "@/domain/entities/Image";

/**
 * DTO de saída para a API HTTP.
 *
 * 🔹 Importante:
 * - Datas serializadas como string (ISO 8601)
 * - Contrato explícito e estável
 */
export namespace CategoryHttp {
  export interface Input {}
  export interface Output {
    id: string;
    name: string;
    description: string | null;
    createdAt: string;
    // image: Image[];
  }
}

/**
 * Presenter responsável por adaptar a entidade Category
 * para o formato esperado pela camada HTTP.
 *
 * ✔ Não contém regra de negócio
 * ✔ Não conhece banco ou framework
 * ✔ Apenas transformação de dados
 */
export class CategoryPresenter {
  /**
   * Converte uma entidade de domínio em DTO HTTP
   */
  static toHTTP(entity: Category): CategoryHttp.Output {
    return {
      id: entity.id.getValue(),
      name: entity.name,
      description: entity.description,
      createdAt: entity.createdAt.toISOString(),
      // image: entity.image,
    };
  }

  /**
   * Converte uma lista de entidades para DTOs HTTP
   * Evita repetição de `.map()` espalhado pelo código
   */
  static toHTTPList(entities: Category[]): CategoryHttp.Output[] {
    return entities.map(CategoryPresenter.toHTTP);
  }
}
