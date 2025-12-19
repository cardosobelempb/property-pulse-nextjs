import { AggregateAbstract, Optional, UUIDVO } from "@/shared";
import { Location } from "./Location";

/**
 * Tipagem oficial da entidade Property no domínio.
 * Esta tipagem representa o estado REAL da entidade, nunca um DTO externo.
 */
export type PropertyProps = {
  id?: UUIDVO;
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  isFeatured: boolean;
  // locationId: string;
  userId: string;
  rateId: string;
  // images: any[];
  // amenities: any[];
  // rate: Rate;
  // user: User;
  location: Location;
  createdAt?: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
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
export class Property extends AggregateAbstract<PropertyProps> {
  // ----------------------
  // 🌱 Getters públicos
  // ----------------------

  get name() {
    return this.props.name;
  }
  get type() {
    return this.props.type;
  }
  get description() {
    return this.props.description;
  }
  get beds() {
    return this.props.beds;
  }
  get baths() {
    return this.props.baths;
  }
  get squareFeet() {
    return this.props.squareFeet;
  }

  /**
   * Importante: retorno uma cópia superficial
   * para evitar mutação externa inadvertida.
   */
  // get amenities() {
  //   return [...this.props.amenities];
  // }

  // get amenities() {
  //   return this.props.amenities;
  // }

  // get images() {
  //   return [...this.props.images];
  // }

  get isFeatured() {
    return this.props.isFeatured;
  }

  get rateId() {
    return this.props.rateId;
  }

  get userId() {
    return this.props.userId;
  }

  get location() {
    return this.props.location;
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

  get updateAt() {
    return this.props.updatedAt;
  }

  // ----------------------
  // ✏ Mutação controlada (invariantes)
  // ----------------------

  updateName(name: string) {
    if (!name.trim()) throw new Error("Property name cannot be empty.");
    this.props.name = name.trim();
    this.touch();
  }

  updateDescription(description: string) {
    if (!description.trim()) throw new Error("Description cannot be empty.");
    this.props.description = description.trim();
    this.touch();
  }

  updateType(type: string) {
    if (!type.trim()) throw new Error("Type cannot be empty.");
    this.props.type = type.trim();
    this.touch();
  }

  updateUserId(userId: string) {
    if (!userId) throw new Error("UserI cannot be empty.");
    this.props.userId = userId;
    this.touch();
  }

  updateLocation(location: Location) {
    if (!location) throw new Error("Location cannot be empty.");
    this.props.location = location;
    this.touch();
  }

  updateRateId(rateId: string) {
    if (!rateId) throw new Error("RateId cannot be empty.");
    this.props.rateId = rateId;
    this.touch();
  }

  updateIsFeatured(isFeatured: boolean) {
    this.props.isFeatured = isFeatured;
    this.touch();
  }

  updateBeds(beds: number) {
    if (beds < 0) throw new Error("Beds cannot be negative.");
    this.props.beds = beds;
    this.touch();
  }

  updateBaths(baths: number) {
    if (baths < 0) throw new Error("Baths cannot be negative.");
    this.props.baths = baths;
    this.touch();
  }

  updateSquareFeet(squareFeet: number) {
    if (squareFeet <= 0) throw new Error("Square feet must be positive.");
    this.props.squareFeet = squareFeet;
    this.touch();
  }

  // updateImages(images: Image[]) {
  //   // poderíamos validar duplicados aqui
  //   this.props.images = [...images];
  //   this.touch();
  // }

  // updateAmenities(amenities: PropertyAmenity[]) {
  //   // validação estratégica: garantir que são entidades válidas
  //   amenities.forEach((a) => {
  //     if (!(a instanceof PropertyAmenity)) {
  //       throw new Error("Amenities must be instances of PropertyAmenity.");
  //     }
  //   });

  //   this.props.amenities = [...amenities];
  //   this.touch();
  // }
  // updateAmenities(amenities: PropertyAmenityList) {
  //   this.props.amenities = amenities;
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
      PropertyProps,
      "createdAt" | "deletedAt" | "updatedAt" | "isFeatured"
    >,
    id?: UUIDVO
  ) {
    return new Property(
      {
        ...props,
        isFeatured: props.isFeatured ?? false,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}
