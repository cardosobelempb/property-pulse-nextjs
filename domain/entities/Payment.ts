import { Entity, Optional, UUIDVO } from "@/shared";
import { Order } from "./Order";

/**
 * Tipagem oficial da entidade Property no domínio.
 * Esta tipagem representa o estado REAL da entidade, nunca um DTO externo.
 */
export type PaymentProps = {
  order: Order | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

/**
 * Entidade de domínio Property
 *
 * Regras importantes:
 *  - Nunca aceitar DTO cru do ORM.
 *  - Collection interna deve ser sempre entidade válida.
 *  - Mutação deve passar por invariantes.
 *  - O agregado é responsável pela coerência interna.
 */
export class Payment extends Entity<PaymentProps> {
  // ----------------------
  // 🌱 Getters públicos
  // ----------------------

  get order() {
    return this.props.order;
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
  // ✏ Mutação controlada (invariantes)
  // ----------------------

  // updateName(name: string) {
  //   if (!name.trim()) throw new Error("Property name cannot be empty.");
  //   this.props.name = name.trim();
  //   this.touch();
  // }

  softDelete() {
    this.props.deletedAt = new Date();
    this.touch();
  }

  /** Atualiza o campo updatedAt e preserva consistência */
  private touch() {
    this.props.updatedAt = new Date();
  }

  // ----------------------
  // 🏗 Factory Method
  // ----------------------

  /**
   * Criação segura da entidade.
   * Nunca recebe DTO direto do ORM sem mapper.
   */
  static create(
    props: Optional<
      PaymentProps,
      "order" | "createdAt" | "deletedAt" | "updatedAt"
    >,
    id?: UUIDVO
  ) {
    return new Payment(
      {
        ...props,
        order: props.order ?? null,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}
