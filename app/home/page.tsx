import Hero from "@/components/hero";
import InfoBoxes from "@/components/info-boxes";
import { BoxLayout } from "@/components/layout/BoxLayout";
import { ContainerLayout } from "@/components/layout/ContainerLayout";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import RecentProperty from "@/components/properties/RecentProperty";

export default function HomePage() {
  return (
    <ContainerLayout full className="gap-y-8">
      <ContentLayout className="bg-blue-800">
        <BoxLayout className="py-20">
          <Hero />
        </BoxLayout>
      </ContentLayout>
      <ContentLayout>
        <BoxLayout>
          <InfoBoxes />
        </BoxLayout>
      </ContentLayout>
      <ContentLayout>
        <BoxLayout>
          <RecentProperty />
        </BoxLayout>
      </ContentLayout>
    </ContainerLayout>
  );
}
