import { data } from "@/data/data";
import CardProperty from "./CardProperty";
import Link from "next/link";

export default function RecentProperty() {
  const recentPrperties = data.slice(0, 3);
  console.log(recentPrperties);
  return (
    <>
      <section className="container-xl lg:container px-4 py-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="px-4 py-6">
          {recentPrperties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* {recentPrperties.map((property) => (
                  <CardProperty key={property} property={property} />
                ))} */}
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
