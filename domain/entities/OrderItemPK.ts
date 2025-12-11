import { Entity } from "@/shared";
import { Order } from "./Order";
import { Product } from "./Product";

/**
 * Representa a chave composta embutida,
 * equivalente ao @Embeddable do JPA.
 */
export interface OrderItemPKProps {
  order: Order; // equivale a @ManyToOne + @JoinColumn(name="order_id")
  product: Product; // equivale a @ManyToOne + @JoinColumn(name="product_id")
}

/**
 * Value Object/Entity que representa a chave composta de OrderItem.
 * Segue o mesmo padrão conceitual do JPA @Embeddable.
 */
export class OrderItemPK extends Entity<OrderItemPKProps> {
  /** Mapeamento equivalente ao campo @ManyToOne(order) */
  get order(): Order {
    return this.props.order;
  }

  /** Mapeamento equivalente ao campo @ManyToOne(product) */
  get product(): Product {
    return this.props.product;
  }

  /**
   * Factory method.
   * Aplica validações essenciais, simulando a imutabilidade e segurança
   * de um @Embeddable do JPA.
   */
  static create(props: OrderItemPKProps): OrderItemPK {
    if (!props.order) {
      throw new Error("OrderItemPK: 'order' não pode ser nulo.");
    }

    if (!props.product) {
      throw new Error("OrderItemPK: 'product' não pode ser nulo.");
    }

    return new OrderItemPK(props);
  }
}
