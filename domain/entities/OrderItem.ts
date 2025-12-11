import { Entity, UUIDVO } from "@/shared";
import { OrderItemPK } from "./OrderItemPK";

/**
 * Propriedades da entidade OrderItem.
 * Representa a linha de um pedido (similar a item de nota fiscal).
 */
export interface OrderItemProps {
  pk: OrderItemPK; // Renomeado para clareza — segue naming de JPA
  quantity: number;
  price: number;
}

/**
 * Entidade OrderItem.
 * Similar ao comportamento do JPA @Entity que usa EmbeddedId.
 */
export class OrderItem extends Entity<OrderItemProps> {
  /** Chave composta do item */
  get pk(): OrderItemPK {
    return this.props.pk;
  }

  /** Quantidade do item */
  get quantity(): number {
    return this.props.quantity;
  }

  /** Preço unitário no momento da compra */
  get price(): number {
    return this.props.price;
  }

  get subtotal(): number {
    return this.quantity * this.price;
  }

  /**
   * Factory Method de criação de OrderItem.
   * Inclui validações essenciais que previnem bugs de domínio.
   */
  static create(props: OrderItemProps, id?: UUIDVO): OrderItem {
    // Validações defensivas — análogas às constraints do domínio
    if (!props.pk) {
      throw new Error("OrderItem: 'pk' (OrderItemPK) é obrigatório.");
    }

    if (props.quantity <= 0) {
      throw new Error("OrderItem: 'quantity' deve ser maior que zero.");
    }

    if (props.price < 0) {
      throw new Error("OrderItem: 'price' não pode ser negativo.");
    }

    return new OrderItem(props, id);
  }
}

/**
const pk = OrderItemPK.create({
  order,
  product
});

const item = OrderItem.create({
  pk,
  quantity: 3,
  price: 89.90,
});
 */
