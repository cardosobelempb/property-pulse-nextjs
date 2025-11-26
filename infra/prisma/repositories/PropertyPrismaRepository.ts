import { Property } from "@/domain/entities/Property";
import { IPagination, NotFoundError, prisma } from "@/shared";
import { PropertyRepository } from "../../../domain/repositories/PropertyRepository";
import { PropertyMapper } from "../mappers/PropertyMapper";

/**
 * @class PropertyPrismaRepository
 * @description
 * Implementação do PropertyRepository utilizando Prisma ORM.
 * Responsável por isolar a camada de persistência (infra)
 * e traduzir entidades de domínio <-> modelos do banco de dados.
 */
export class PropertyPrismaRepository implements PropertyRepository {
  /**
   * Busca uma propriedade pelo nome (único ou aproximado)
   */
  async findByName(name: string): Promise<Property | null> {
    const property = await prisma.property.findFirst({
      where: { name },
      include: {
        images: true, // 1:N
        amenities: true, // N:N
        rate: true, // 1:1
        location: true, // 1:1
        user: true, // N:1
      },
    });

    if (!property) return null;
    return PropertyMapper.toDomain(property);
  }

  /**
   * Busca uma propriedade pelo ID
   */
  async findById(id: string): Promise<Property | null> {
    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        images: true, // 1:N
        amenities: true, // N:N
        rate: true, // 1:1
        location: true, // 1:1
        user: true, // N:1
      },
    });

    if (!property) return null;
    return PropertyMapper.toDomain(property);
  }

  /**
   * Lista propriedades paginadas
   */
  async findAll({ page, size = 20 }: IPagination): Promise<Property[]> {
    const properties = await prisma.property.findMany({
      take: size,
      skip: (page - 1) * size,
      orderBy: { createdAt: "desc" },
      include: {
        images: true, // 1:N
        amenities: true, // N:N
        rate: true, // 1:1
        location: true, // 1:1
        user: true, // N:1
      },
    });

    const property = properties.map((property) =>
      PropertyMapper.toDomain({ ...property, images: [] })
    );

    return property;
  }

  /**
   * Cria uma nova propriedade no banco
   */
  async create(entity: Property): Promise<void> {
    const data = PropertyMapper.toPersistence(entity);

    await prisma.property.create({
      data: {
        ...data,
        amenities: {}, // opcional se criação aninhada for usada
        images: {
          connect: entity.images?.map((image) => ({ id: image.id.getValue() })),
        },
      },
      include: { images: true, amenities: true }, // opcional se criação aninhada for usada
    });
  }

  /**
   * Atualiza uma propriedade existente
   */
  async update(entity: Property): Promise<void> {
    if (!entity.id) {
      throw new NotFoundError("Property inválida: ID ausente para update.");
    }

    const data = PropertyMapper.toPersistence(entity);

    await prisma.property.update({
      where: { id: entity.id.getValue() },
      data: {
        ...data,
        amenities: {},
        images: {
          connect: entity.images?.map((image) => ({ id: image.id.getValue() })),
        },
      },
      include: { images: true, amenities: true }, // opcional se criação aninhada for usada
    });
  }

  /**
   * Remove uma propriedade existente
   */
  async delete(entity: Property): Promise<void> {
    if (!entity.id) {
      throw new NotFoundError("Property inválida: ID ausente para delete.");
    }

    await prisma.property.delete({
      where: { id: entity.id.getValue() },
    });
  }
}
