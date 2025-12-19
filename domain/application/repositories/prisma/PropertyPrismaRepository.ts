import { Property } from "@/domain/entities/Property";
import { IPagination, NotFoundError, prisma } from "@/shared";
import { PropertyMapper } from "../mappers/PropertyMapper";
import { PropertyRepository } from "../PropertyRepository";

export class PropertyPrismaRepository implements PropertyRepository {
  async findByName(name: string): Promise<Property | null> {
    if (!name?.trim()) return null;

    const property = await prisma.property.findFirst({
      where: { name },
      include: this.buildIncludes(),
    });

    return property ? PropertyMapper.toDomain(property) : null;
  }

  async findById(id: string): Promise<Property | null> {
    if (!id?.trim()) return null;

    const property = await prisma.property.findUnique({
      where: { id },
      include: this.buildIncludes(),
    });

    // console.log("Property =>", property);
    return property ? PropertyMapper.toDomain(property) : null;
  }

  async findAll({ page, size = 20 }: IPagination): Promise<Property[]> {
    const properties = await prisma.property.findMany({
      take: size,
      skip: (page - 1) * size,
      orderBy: { createdAt: "desc" },
      include: this.buildIncludes(),
    });

    return properties.map(PropertyMapper.toDomain);
  }

  async create(entity: Property): Promise<void> {
    const data = PropertyMapper.toPersistence(entity);
    await prisma.property.create({
      data,
    });
  }

  async insert(entity: Property): Promise<Property> {
    const data = PropertyMapper.toPersistence(entity);
    const property = await prisma.property.create({
      data,
      include: { location: true },
    });

    return PropertyMapper.toDomain(property);
  }

  async update(entity: Property): Promise<void> {
    if (!entity.id) {
      throw new NotFoundError("Property inválida: ID ausente para update.");
    }

    await prisma.property.update({
      where: { id: entity.id.getValue() },
      data: PropertyMapper.toPersistence(entity),
      include: this.buildIncludes(),
    });
  }

  async edit(id: string, entity: Property): Promise<Property> {
    throw new Error("Method not implemented.");
  }

  async delete(entity: Property): Promise<void> {
    if (!entity.id) {
      throw new NotFoundError("Property inválida: ID ausente para delete.");
    }

    await prisma.property.delete({
      where: { id: entity.id.getValue() },
    });
  }

  async destroy(id: string, entity: Property): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private buildIncludes() {
    return {
      images: true,
      amenities: { include: { amenity: true } },
      rate: true,
      location: true,
      user: true,
    };
  }
}
