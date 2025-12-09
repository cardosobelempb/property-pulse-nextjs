import { User, UserProps } from "@/domain/entities/User";

/**
 * @class UserPresenter
 * @description
 * Responsável por transformar a entidade de domínio (UserEntity)
 * em um objeto pronto para ser serializado e retornado em respostas HTTP.
 *
 * 🔹 Benefícios:
 * - Mantém o domínio isolado da camada de apresentação (Clean Architecture)
 * - Padroniza o formato de saída (DTO)
 * - Facilita testes e manutenção
 */

/**
 * @interface UserHttpResponse
 * @description Define o formato de saída do usuário via API HTTP.
 */
export interface UserHttpResponse extends UserProps {}

export class UserPresenter {
  /**
   * Transforma uma entidade de domínio em DTO para resposta HTTP
   * @param entity Instância de UserEntity
   * @returns Objeto com dados prontos para serialização
   */
  static toHTTP(entity: User): UserHttpResponse {
    return {
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      phone: entity.phone ?? null, // Garante valor consistente
      image: entity.image,
      role: entity.role,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
