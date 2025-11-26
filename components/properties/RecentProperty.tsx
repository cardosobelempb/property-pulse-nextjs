import { data } from "@/data/data";
import Link from "next/link";
import { prisma } from "@/shared";
import CardProperty from "./CardProperty";

export default async function RecentProperty() {
  const prismaRecentPrperties = await prisma.property.findMany({
    include: {
      rate: true,
      location: true,
      images: true,
      amenities: true,
      user: true,
    },
    take: 3,
    skip: (1 - 1) * 3,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <section className="container-xl lg:container py-6">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-100 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="px-4 py-6">
          {prismaRecentPrperties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {prismaRecentPrperties.map((property) => (
                  <CardProperty key={property.id} property={property} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-6 px-6">
        <Link
          className="block bg-gray-800 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          href={"/properties"}
        >
          View All Properties
        </Link>
      </section>
    </>
  );
}
