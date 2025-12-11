import { Entity, Optional, UUIDVO } from "@/shared";
import { Order } from "./Order";

/**
 * Estado real da entidade Payment no domínio.
 * Nunca representa DTO externo.
 */
export type PaymentProps = {
  order: Order | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

/**
 * Entidade de domínio Payment
 *
 * Regras:
 * - Pode ou não estar associado a um Order (conforme regra de negócio)
 * - Mutação deve ser controlada por invariantes
 * - Datas sempre normalizadas
 * - Soft delete idempotente
 */
export class Payment extends Entity<PaymentProps> {
  // ----------------------
  // 🌱 Getters públicos
  // ----------------------

  get order(): Order | null {
    return this.props.order;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | null {
    return this.props.updatedAt;
  }

  get deletedAt(): Date | null {
    return this.props.deletedAt;
  }

  // ----------------------
  // ✏ Mutação controlada (invariantes)
  // ----------------------

  /**
   * Associação com Order deve ser controlada explicitamente.
   * Evita ciclos perigosos e inconsistência.
   */
  assignOrder(order: Order): void {
    if (!order) {
      throw new Error("Payment: order cannot be null.");
    }

    // Evita associações duplicadas
    if (this.props.order?.equals(order)) return;

    this.props.order = order;
    this.touch();
  }

  /**
   * Desassocia o pagamento de um pedido.
   * Útil para cenários administrativos.
   */
  removeOrder(): void {
    if (!this.props.order) return;

    this.props.order = null;
    this.touch();
  }

  /**
   * Soft-delete idempotente com preservação do histórico.
   */
  softDelete(): void {
    if (this.props.deletedAt) return; // evita sobrescrever
    this.props.deletedAt = new Date();
    this.touch();
  }

  /** Mantém updatedAt sempre coerente com mutações */
  private touch(): void {
    this.props.updatedAt = new Date();
  }

  // ----------------------
  // 🏗 Factory Method (criação segura)
  // ----------------------

  static create(
    props: Optional<
      PaymentProps,
      "order" | "createdAt" | "updatedAt" | "deletedAt"
    >,
    id?: UUIDVO
  ): Payment {
    const now = new Date();

    return new Payment(
      {
        order: props.order ?? null,
        createdAt: props.createdAt ?? now,
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}

/*
const payment = Payment.create({});

payment.assignOrder(order);

payment.softDelete();

// remover associação
payment.removeOrder();
*/
