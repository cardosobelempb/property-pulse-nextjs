import FormSearch from "@/components/shared/FormSearch";

import Aside from "@/components/Aside";
import { BoxLayout } from "@/components/layout/BoxLayout";
import { ContainerLayout } from "@/components/layout/ContainerLayout";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import LinkBack from "@/components/LinkBack";
import PropertyDetails from "@/components/property/PropertyDetails";
import PropertyHeader from "@/components/property/PropertyHeader";
import { PropertyPrismaRepository } from "@/domain/application/repositories/prisma";
import { PropertyPresenter } from "@/infra/presenters/PropertyPresenter";
interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const propertyPrismaRepository = new PropertyPrismaRepository();

  const property = await propertyPrismaRepository.findById(id);
  // console.log("Property =>", property);

  if (!property) throw new Error("Property não encontrada.");

  const propertyPresenter = PropertyPresenter.toHTTP(property);
  // console.log("PropertyPresenter =>", propertyPresenter);

  return (
    <MainLayout className="">
      {/* <!-- Form Component --> */}
      <FormSearch />

      {/* <!-- Property Header Image --> */}
      <PropertyHeader
        image={property.images ? property.images[0].url : "/default-image.jpg"}
      />

      {/* <!-- Go Back --> */}

      <LinkBack href="/properties" />

      {/* <!-- Property Info --> */}
      {/* <PropertyInfo property={property} amenities={amenities} /> */}
      <ContainerLayout className="bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800">
        <ContentLayout className="container m-auto py-10 px-6">
          <BoxLayout className="grid grid-cols-12 w-full gap-6">
            <PropertyDetails property={propertyPresenter} />

            {/* <!-- Sidebar --> */}
            <Aside />
          </BoxLayout>
        </ContentLayout>
      </ContainerLayout>
    </MainLayout>
  );
}
