import CardProperty from "@/components/properties/CardProperty";
import { prisma } from "@/shared";

const PropertiesPage = async () => {
  const prismaProperties = await prisma.property.findMany({
    include: {
      rate: true,
      location: true,
      images: true,
      amenities: true,
      user: true,
    },
  });

  return (
    <section className="container-xl lg:container m-auto px-4 py-6">
      <div className="px-4 py-6">
        {prismaProperties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prismaProperties.map((property) => (
                <CardProperty key={property.id} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
