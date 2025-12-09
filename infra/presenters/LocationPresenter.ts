import { Location, LocationProps } from "@/domain/entities/Location";

/**
 * Saída segura e controlada para API HTTP.
 *
 * Aqui definimos SOMENTE o que a API deve expor, evitando vazamento do domínio.
 */
export interface LocationHttpResponse extends LocationProps {}

/**
 * Presenter responsável por transformar a entidade Location
 * em um DTO pronto para entrega na camada HTTP.
 */
export class LocationPresenter {
  static toHTTP(entity: Location): LocationHttpResponse {
    return {
      id: entity.id, // ⚠ domain-led UUIDVO → primitivo
      city: entity.city,
      state: entity.state,
      street: entity.street,
      zipCode: entity.zipCode,
      createdAt: entity.createdAt,
    };
  }
}
