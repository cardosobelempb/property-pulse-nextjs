import { AggregateAbstract, Optional, UUIDVO } from "@/shared";
import { Image } from "./Image";
import { Category } from "./Category";
import { OrderItem } from "./OrderItem";
import { Order } from "./Order";

/**
 * Tipagem oficial da entidade Product no domínio.
 */
export type ProductProps = {
  name: string;
  description: string;
  price: number;

  images: Image[];
  categories: Category[];

  /** espelhando @OneToMany(mappedBy="id.product") */
  items: OrderItem[];

  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

/**
 * Entidade Product (Aggregate Root)
 *
 * Agora com:
 *  - items: OrderItem[]
 *  - getOrders()
 *  - addItem/removeItem
 */
export class Product extends AggregateAbstract<ProductProps> {
  // ----------------------
  // 🌱 Getters públicos
  // ----------------------

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get price(): number {
    return this.props.price;
  }

  get images(): Image[] {
    return [...this.props.images];
  }

  get categories(): Category[] {
    return [...this.props.categories];
  }

  /** igual ao public Set<OrderItem> getItems() do JPA */
  get items(): OrderItem[] {
    return [...this.props.items];
  }

  /** igual ao getOrders() em Java */
  getOrders(): Order[] {
    return this.props.items.map((item) => item.props.pk.order);
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

  updateName(name: string): void {
    const trimmed = name.trim();
    if (!trimmed) throw new Error("Product name cannot be empty.");
    this.props.name = trimmed;
    this.touch();
  }

  updateDescription(description: string): void {
    const trimmed = description.trim();
    if (!trimmed) throw new Error("Product description cannot be empty.");
    this.props.description = trimmed;
    this.touch();
  }

  updatePrice(price: number): void {
    if (price < 0) throw new Error("Product price cannot be negative.");
    this.props.price = price;
    this.touch();
  }

  // ----------------------
  // 📦 Manipulação de Images
  // ----------------------

  addImage(image: Image): void {
    if (!this.props.images.some((i) => i.equals(image))) {
      this.props.images.push(image);
      this.touch();
    }
  }

  removeImage(image: Image): void {
    this.props.images = this.props.images.filter((i) => !i.equals(image));
    this.touch();
  }

  // ----------------------
  // 🏷 Manipulação de Categories
  // ----------------------

  addCategory(category: Category): void {
    if (!this.props.categories.some((c) => c.equals(category))) {
      this.props.categories.push(category);
      this.touch();
    }
  }

  removeCategory(category: Category): void {
    this.props.categories = this.props.categories.filter(
      (c) => !c.equals(category)
    );
    this.touch();
  }

  // ----------------------
  // 🧩 Manipulação de OrderItem (novo)
  // ----------------------

  /** Igual ao Set.add no JPA */
  addItem(item: OrderItem): void {
    if (!this.props.items.some((i) => i.equals(item))) {
      this.props.items.push(item);
      this.touch();
    }
  }

  /** Igual ao Set.remove no JPA */
  removeItem(item: OrderItem): void {
    this.props.items = this.props.items.filter((i) => !i.equals(item));
    this.touch();
  }

  // ----------------------
  // 🗑 Soft Delete
  // ----------------------

  softDelete(): void {
    if (this.props.deletedAt) return; // idempotente
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
      ProductProps,
      | "items"
      | "images"
      | "categories"
      | "createdAt"
      | "deletedAt"
      | "updatedAt"
    >,
    id?: UUIDVO
  ): Product {
    const now = new Date();

    if (!props.name?.trim()) {
      throw new Error("Product.name is required.");
    }

    if (!props.description?.trim()) {
      throw new Error("Product.description is required.");
    }

    if (props.price == null || props.price < 0) {
      throw new Error("Product.price must be a non-negative number.");
    }

    return new Product(
      {
        ...props,

        name: props.name.trim(),
        description: props.description.trim(),
        price: props.price,

        images: props.images ?? [],
        categories: props.categories ?? [],
        items: props.items ?? [], // <-- equivalente ao Set<OrderItem>

        createdAt: props.createdAt ?? now,
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}

/*
const product = Product.create({
  name: "Mouse Gamer",
  description: "Mouse RGB 7200dpi",
  price: 149.9,
});

product.updatePrice(199.9);

product.addCategory(category);
product.addImage(image);

product.removeCategory(oldCategory);
product.softDelete();

product.addItem(orderItem);
const orders = product.getOrders(); // [Order, Order, ...]

*/
