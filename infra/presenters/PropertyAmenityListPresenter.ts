import { PropertyAmenityList } from "@/domain/entities/PropertyAmenityList";
import { PropertyAmenityHttpResponse } from "./PropertyAmenityPresenter";

/**
 * Saída segura e controlada para API HTTP.
 *
 * Aqui definimos SOMENTE o que a API deve expor, evitando vazamento do domínio.
 */

export interface PropertyAmenityListHttpResponse
  extends PropertyAmenityHttpResponse {}

/**
 * Presenter responsável por transformar a entidade Amenity
 * em um DTO pronto para entrega na camada HTTP.
 */
export class PropertyAmenityListPresenter {
  static toHTTP(entity: PropertyAmenityList): PropertyAmenityListHttpResponse {
    console.log("PropertyAmenityListPresenter =>", entity.getItems());
    // if (!entity || typeof entity.getItems !== "function") {
    //   return { items: [] };
    // }
    // return entity.getItems((amenity) => console.log(amenity))
  }
}
