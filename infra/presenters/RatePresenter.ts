import { Rate, RateProps } from "@/domain/entities/Rate";

/**
 * Saída segura e controlada para API HTTP.
 *
 * Aqui definimos SOMENTE o que a API deve expor, evitando vazamento do domínio.
 */
export interface RateHttpResponse extends RateProps {}

/**
 * Presenter responsável por transformar a entidade Rate
 * em um DTO pronto para entrega na camada HTTP.
 */
export class RatePresenter {
  static toHTTP(entity: Rate): RateHttpResponse {
    return {
      id: entity.id, // ⚠ domain-led UUIDVO → primitivo
      monthly: entity.monthly,
      nightly: entity.nightly,
      weekly: entity.weekly,
      createdAt: entity.createdAt,
    };
  }
}
