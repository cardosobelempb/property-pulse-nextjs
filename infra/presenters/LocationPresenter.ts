import { Location } from "@/domain/entities/Location";

/**
 * Saída segura e controlada para API HTTP.
 *
 * Aqui definimos SOMENTE o que a API deve expor, evitando vazamento do domínio.
 */
export interface LocationPresenterProps {
  id: string;
  city: string;
  state: string;
  street: string;
  zipcode: string;
  createdAt: Date;
}

/**
 * Presenter responsável por transformar a entidade Location
 * em um DTO pronto para entrega na camada HTTP.
 */
export class LocationPresenter {
  static toHTTP(entity: Location): LocationPresenterProps {
    return {
      id: entity.id.toString(),
      city: entity.city,
      state: entity.state,
      street: entity.street,
      zipcode: entity.zipcode,
      createdAt: entity.createdAt,
    };
  }
}
