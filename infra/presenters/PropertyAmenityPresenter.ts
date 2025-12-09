import {
  PropertyAmenity,
  PropertyAmenityProps,
} from "@/domain/entities/PropertyAmenity";

/**
 * Saída segura e controlada para API HTTP.
 *
 * Aqui definimos SOMENTE o que a API deve expor, evitando vazamento do domínio.
 */
export interface PropertyAmenityHttpResponse extends PropertyAmenityProps {}

/**
 * Presenter responsável por transformar a entidade Amenity
 * em um DTO pronto para entrega na camada HTTP.
 */
export class PropertyAmenityPresenter {
  static toHTTP(entity: PropertyAmenity): PropertyAmenityHttpResponse {
    console.log("PropertyAmenityPresenter", entity.name);
    return {
      amenityId: entity.amenityId,
      propertyId: entity.propertyId,
      name: entity.name,
      createdAt: entity.createdAt,
    };
  }
}
