import { Image, ImageProps } from "@/domain/entities/Image";

/**
 * Saída segura e controlada para API HTTP.
 *
 * Aqui definimos SOMENTE o que a API deve expor, evitando vazamento do domínio.
 */
export interface ImageHttpResponse extends ImageProps {}

/**
 * Presenter responsável por transformar a entidade Image
 * em um DTO pronto para entrega na camada HTTP.
 */
export class ImagePresenter {
  static toHTTP(entity: Image): ImageHttpResponse {
    return {
      id: entity.id, // ⚠ domain-led UUIDVO → primitivo
      url: entity.url,
      propertyId: entity.propertyId,
      createdAt: entity.createdAt,
    };
  }
}
