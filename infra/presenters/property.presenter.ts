import { Property, PropertyProps } from "@/domain/entities/Property";

/**
 * @interface PropertyHttpResponse
 * @description Define o formato de saída do usuário via API HTTP.
 */
export interface PropertyHttpResponse extends PropertyProps {}

/**
 * @class PropertyPresenter
 * @description
 * Responsável por transformar a entidade de domínio (PropertyEntity)
 * em um objeto pronto para ser serializado e retornado em respostas HTTP.
 *
 * 🔹 Benefícios:
 * - Mantém o domínio isolado da camada de apresentação (Clean Architecture)
 * - Padroniza o formato de saída (DTO)
 * - Facilita testes e manutenção
 */
export class PropertyPresenter {
  /**
   * Transforma uma entidade de domínio em DTO para resposta HTTP
   * @param entity Instância de PropertyEntity
   * @returns Objeto com dados prontos para serialização
   */
  static toHTTP(entity: Property): PropertyHttpResponse {
    return {
      name: entity.name,
      type: entity.type,
      description: entity.description,
      beds: entity.beds,
      baths: entity.baths,
      squareFeet: entity.squareFeet,
      amenities: entity.amenities,
      rate: entity.rate,
      images: entity.images?.map((image) => image) || [],
      isFeatured: entity.isFeatured,
      location: entity.location,
      user: entity.user,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
