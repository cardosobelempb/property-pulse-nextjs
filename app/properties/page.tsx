import CardProperty from "@/components/properties/CardProperty";
import prisma from "@/libs/prisma";

const PropertiesPage = async () => {
  // const rate = await prisma.rate.findMany();
  // const location = await prisma.location.findMany();

  const properties = await prisma.property.findMany({
    include: { rates: true, location: true },
  });

  console.log(properties);

  return (
    <section className="container-xl lg:container m-auto px-4 py-6">
      <div className="px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
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
