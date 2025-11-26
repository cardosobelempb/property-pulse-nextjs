import Image from "next/image";
import { ContainerLayout } from "../layout/ContainerLayout";
import { ContentLayout } from "../layout/ContentLayout";
import { BoxLayout } from "../layout/BoxLayout";

export interface PropertyHeaderProps {
  image: string;
}

export default function PropertyHeader({ image }: PropertyHeaderProps) {
  return (
    <ContainerLayout>
      <ContentLayout full>
        <BoxLayout className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="w-full h-[350px]"
          />
        </BoxLayout>
      </ContentLayout>
    </ContainerLayout>
  );
}
