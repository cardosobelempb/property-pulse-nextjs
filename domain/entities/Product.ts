import { AggregateAbstract, Optional, UUIDVO } from "@/shared";
import { Image } from "./Image";
import { PropertyAmenity } from "./PropertyAmenity";
import { Rate } from "./Rate";
import { Location } from "./Location";
import { User } from "./User";
import { PropertyAmenityList } from "./PropertyAmenityList";

/**
 * Tipagem oficial da entidade Property no domínio.
 * Esta tipagem representa o estado REAL da entidade, nunca um DTO externo.
 */
export type PropertyProps = {
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  amenities: PropertyAmenityList;
  images: Image[];
  rateId: UUIDVO;
  rate: Rate | null;
  isFeatured: boolean;
  locationId: UUIDVO;
  location: Location | null;
  userId: UUIDVO;
  user: User | null;
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

  get amenities() {
    return this.props.amenities;
  }

  get images() {
    return [...this.props.images];
  }

  get isFeatured() {
    return this.props.isFeatured;
  }
  get rateId() {
    return this.props.rateId;
  }

  get rate() {
    return this.props.rate;
  }

  get userId() {
    return this.props.userId;
  }

  get user() {
    return this.props.user;
  }

  get locationId() {
    return this.props.locationId;
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

  updateUserId(userId: UUIDVO) {
    if (!userId.isValid()) throw new Error("UserI cannot be empty.");
    this.props.userId = userId;
    this.touch();
  }

  updateLocationId(locationId: UUIDVO) {
    if (!locationId.isValid()) throw new Error("LocationId cannot be empty.");
    this.props.locationId = locationId;
    this.touch();
  }

  updateRateId(rateId: UUIDVO) {
    if (!rateId.isValid()) throw new Error("RateId cannot be empty.");
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

  updateImages(images: Image[]) {
    // poderíamos validar duplicados aqui
    this.props.images = [...images];
    this.touch();
  }

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
  updateAmenities(amenities: PropertyAmenityList) {
    this.props.amenities = amenities;
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
      PropertyProps,
      | "createdAt"
      | "images"
      | "amenities"
      | "user"
      | "rate"
      | "location"
      | "deletedAt"
      | "updatedAt"
    >,
    id?: UUIDVO
  ) {
    return new Property(
      {
        ...props,
        images: props.images ?? [],
        amenities: props.amenities ?? new PropertyAmenityList(),
        user: props.user ?? null,
        rate: props.rate ?? null,
        location: props.location ?? null,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );
  }
}
