import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { ContainerLayout } from "./layout/ContainerLayout";
import { ContentLayout } from "./layout/ContentLayout";

export interface LinkBackProps {
  href: string;
}

export default function LinkBack({ href }: LinkBackProps) {
  return (
    <ContainerLayout className="py-6 px-6 bg-gray-800 text-gray-100 dark:bg-white dark:text-gray-800">
      <ContentLayout>
        <Link
          href={href}
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <FaChevronLeft className="mr-2" /> Back to Properties
        </Link>
      </ContentLayout>
    </ContainerLayout>
  );
}
