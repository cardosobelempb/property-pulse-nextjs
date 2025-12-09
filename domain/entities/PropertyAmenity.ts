import { Entity, Optional, UUIDVO } from "@/shared";
import { AmenityProps } from "./Amenity";

/**
 * Props internas de PropertyAmenity
 * - Representa a relação entre um imóvel e uma comodidade (Amenity)
 * - Extende AmenityProps (pois herda nome, timestamps, etc)
 */
export interface PropertyAmenityProps extends AmenityProps {
  propertyId: UUIDVO; // ID do imóvel
  amenityId: UUIDVO; // ID da amenidade (Amenity)
}

/**
 * Entidade PropertyAmenity
 *
 * Regras:
 * - Representa uma ligação N:N entre Property e Amenity
 * - Contém atributos herdados da própria Amenity
 * - Deve expor getters corretos que mantenham integridade
 */
export class PropertyAmenity extends Entity<PropertyAmenityProps> {
  /**
   * ID do imóvel ao qual esta amenidade está vinculada.
   */
  get propertyId() {
    return this.props.propertyId;
  }

  /**
   * ID da amenidade referenciada (Amenity).
   */
  get amenityId() {
    return this.props.amenityId;
  }

  get name() {
    return this.props.name;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  /**
   * Factory para criação segura.
   *
   * - Normaliza campos obrigatórios
   * - Preenche valores default quando necessário
   * - Garante coerência de timestamps
   */
  static create(
    props: Optional<
      PropertyAmenityProps,
      "createdAt" | "updatedAt" | "deletedAt"
    >,
    id?: UUIDVO
  ) {
    const entity = new PropertyAmenity(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
        deletedAt: props.deletedAt ?? null,
      },
      id
    );

    return entity;
  }
}
