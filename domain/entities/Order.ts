import { Entity, Optional, UUIDVO } from "@/shared";
import { OrderStatus } from "./enums/OrderStatus";
import { Payment } from "./Payment";
import { User } from "./User";
import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export type OrderProps = {
  status: OrderStatus;
  client: User;
  payment: Payment | null;

  items: OrderItem[];

  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

/**
 * ORDER — Aggregate Root
 *
 * Agora alinhado ao modelo JPA:
 *   - @OneToMany(mappedBy = "id.order")
 *   - Set<OrderItem> items
 *   - getProducts()
 */
export class Order extends Entity<OrderProps> {
  // ----------------------
  // 🌱 Getters públicos
  // ----------------------

  get status() {
    return this.props.status;
  }

  get client() {
    return this.props.client;
  }

  get payment() {
    return this.props.payment;
  }

  /** Cópia defensiva (não deixa mutação externa) */
  get items(): OrderItem[] {
    return [...this.props.items];
  }

  /** Igual ao método JPA getProducts() */
  getProducts(): Product[] {
    return this.props.items.map((item) => item.pk.product);
  }

  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }
  get deletedAt() {
    return this.props.deletedAt;
  }

  // ----------------------
  // ✏ Mutação controlada
  // ----------------------

  updateStatus(status: OrderStatus): void {
    if (!status) throw new Error("OrderStatus cannot be empty.");
    this.props.status = status;
    this.touch();
  }

  updateClient(client: User): void {
    if (!client) throw new Error("Client cannot be empty.");
    this.props.client = client;
    this.touch();
  }

  /**
   * Adiciona item como no Set<OrderItem> do JPA
   */
  addItem(item: OrderItem): void {
    const exists = this.props.items.some((i) => i.equals(item));

    if (!exists) {
      this.props.items.push(item);
      this.touch();
    }
  }

  removeItem(item: OrderItem): void {
    this.props.items = this.props.items.filter((i) => !i.equals(item));
    this.touch();
  }

  /**
   * Soft delete idempotente
   */
  softDelete(): void {
    if (this.props.deletedAt) return;
    this.props.deletedAt = new Date();
    this.touch();
  }

  private touch(): void {
    this.props.updatedAt = new Date();
  }

  // ----------------------
  // 🏗 Factory Method (criação segura)
  // ----------------------

  static create(
    props: Optional<
      OrderProps,
      "status" | "items" | "payment" | "createdAt" | "deletedAt" | "updatedAt"
    >,
    id?: UUIDVO
  ): Order {
    const now = new Date();

    return new Order(
      {
        ...props,

        status: props.status ?? OrderStatus.WAITING_PAYMENT,
        payment: props.payment ?? null,
        items: props.items ?? [],

        createdAt: props.createdAt ?? now,
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}

/**
const order = Order.create({
  client,
  payment: initialPayment
});

// Mudança de status
order.updateStatus(OrderStatus.PAID);

// Atualizar pagamento
order.updatePayment(newPayment);

// Soft delete
order.softDelete();

order.addItem(orderItem);
order.addItem(orderItem2);

const products = order.getProducts(); // [Product, Product]
 */
