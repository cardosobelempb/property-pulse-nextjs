import { AggregateAbstract, Optional, UUIDVO } from "@/shared";
import { Image } from "./Image";
import { Product } from "./Product";

/**
 * Estado real da entidade Category no domínio.
 * Regras:
 * - Nunca expõe DTO externo.
 * - Datas e coleções sempre normalizadas.
 * - Imutabilidade controlada via invariantes.
 */
export type CategoryProps = {
  id?: UUIDVO;
  name: string;
  description: string | null;
  // images: Image[];
  // products: Product[];

  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

/**
 * Aggregate Root Category:
 * - Controla coerência da lista de produtos
 * - Gerencia soft delete
 * - Aplica invariantes
 */
export class Category extends AggregateAbstract<CategoryProps> {
  // ----------------------
  // 🌱 Getters públicos
  // ----------------------

  get name(): string {
    return this.props.name;
  }

  get description(): string | null {
    return this.props.description;
  }

  // get image(): Image[] {
  //   return this.props.images;
  // }

  // /** Expor cópia defensiva evita mutação externa acidental */
  // get products(): Product[] {
  //   return [...this.props.products];
  // }

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
  // ✏ Mutação controlada (invariantes do agregado)
  // ----------------------

  updateName(name: string) {
    const trimmed = name.trim();
    if (!trimmed) throw new Error("Category.name cannot be empty.");

    this.props.name = trimmed;
    this.touch();
  }

  updateDescription(description: string | null) {
    if (description !== null && !description.trim()) {
      throw new Error("Category.description cannot be empty.");
    }

    this.props.description = description?.trim() ?? null;
    this.touch();
  }

  // updateImage(images: Image[]) {
  //   this.props.images = images;
  //   this.touch();
  // }

  /**
   * Controle explícito sobre associação com produtos.
   * Evita inconsistência e garante integridade do agregado.
   */
  // addProduct(product: Product) {
  //   const alreadyExists = this.props.products.some((p) => p.equals(product));
  //   if (alreadyExists) return;

  //   this.props.products.push(product);
  //   this.touch();
  // }

  // removeProduct(product: Product) {
  //   this.props.products = this.props.products.filter((p) => !p.equals(product));
  //   this.touch();
  // }

  /** Soft delete mantendo histórico */
  softDelete() {
    if (this.props.deletedAt) return; // idempotente

    this.props.deletedAt = new Date();
    this.touch();
  }

  /** Atualiza updatedAt garantindo consistência temporal */
  private touch() {
    this.props.updatedAt = new Date();
  }

  // ----------------------
  // 🏗 Factory
  // ----------------------

  static create(
    props: Optional<
      CategoryProps,
      "createdAt" | "description" | "deletedAt" | "updatedAt"
    >,
    id?: UUIDVO
  ): Category {
    const now = new Date();

    // Normalização defensiva
    return new Category(
      {
        ...props,
        name: props.name.trim(),
        description: props.description?.trim() || null,
        // images: props.images ?? [],
        // products: props.products ?? [],

        createdAt: props.createdAt ?? now,
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}

/**
const category = Category.create({
  name: "Teclados",
  description: "Produtos da linha mecânica"
});

const product = Product.create({ name: "Keychron K6" });

category.addProduct(product);
category.updateName("Teclados Mecânicos");
category.updateDescription("Linha premium de teclados");
category.updateImage(Image.create(...));
category.softDelete();
*/
