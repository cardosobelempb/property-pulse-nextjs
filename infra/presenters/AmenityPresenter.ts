import { Amenity, AmenityProps } from "@/domain/entities/Amenity";

/**
 * Saída segura e controlada para API HTTP.
 *
 * Aqui definimos SOMENTE o que a API deve expor, evitando vazamento do domínio.
 */
export interface AmenityHttpResponse extends AmenityProps {}

/**
 * Presenter responsável por transformar a entidade Amenity
 * em um DTO pronto para entrega na camada HTTP.
 */
export class AmenityPresenter {
  static toHTTP(entity: Amenity): AmenityHttpResponse {
    return {
      name: entity.name,
      createdAt: entity.createdAt,
    };
  }
}
