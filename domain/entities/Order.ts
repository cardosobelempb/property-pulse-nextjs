import { AggregateAbstract, Entity, Optional, UUIDVO } from "@/shared";
import { Image } from "./Image";
import { PropertyAmenity } from "./PropertyAmenity";
import { Rate } from "./Rate";
import { Location } from "./Location";
import { User } from "./User";
import { PropertyAmenityList } from "./PropertyAmenityList";
import { OrderStatus } from "./enums/OrderStatus";

/**
 * Tipagem oficial da entidade Property no domínio.
 * Esta tipagem representa o estado REAL da entidade, nunca um DTO externo.
 */
export type OrderProps = {
  status: OrderStatus;
  client: User;
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

  updateStatus(status: OrderStatus) {
    if (!status) throw new Error("OrderStatus name cannot be empty.");
    this.props.status = status;
    this.touch();
  }

  updateClient(client: User) {
    if (!client) throw new Error("Client name cannot be empty.");
    this.props.client = client;
    this.touch();
  }

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
      OrderProps,
      "status" | "createdAt" | "deletedAt" | "updatedAt"
    >,
    id?: UUIDVO
  ) {
    return new Order(
      {
        ...props,
        status: props.status ?? OrderStatus.WAITING_PAYMENT,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}
