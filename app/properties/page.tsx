import { MainLayout } from "@/components/layout/MainLayout";
import CardProperty from "@/components/properties/CardProperty";
import { PropertyAmenityListPresenter } from "@/infra/presenters/PropertyAmenityListPresenter";
import { PropertyPresenter } from "@/infra/presenters/PropertyPresenter";
import { prisma } from "@/shared";

const PropertiesPage = async () => {
  console.log("PropertiesPage");
  const prismaProperties = await prisma.property.findMany({
    include: {
      rate: true,
      location: true,
      images: true,
      amenities: { include: { amenity: true } },
      user: true,
    },
  });

  // console.log("PrismaProperties =>", prismaProperties[0].amenities[0]);

  const propertyPresenters = prismaProperties.map((property) => {
    console.log("PropertyAmenityPresenter", property);
    return PropertyPresenter.toHTTP(property);
  });

  // console.log("PropertyPresenters =>", propertyPresenters[0]);

  return (
    <section className="container-xl lg:container m-auto px-4 py-6">
      <MainLayout className="px-4 py-6">
        <h1>Main</h1>
        {/* {propertyPresenters.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {propertyPresenters.map((property) => {
                return <CardProperty key={property.id} property={property} />;
              })}
            </div>
          </>
        )} */}
      </MainLayout>
    </section>
  );
};

export default PropertiesPage;
