import { data } from "@/data/data";
import CardProperty from "../components/properties/CardProperty";

const PropertiesPage = () => {
  return (
    <section className="container-xl lg:container m-auto px-4 py-6">
      <div className="px-4 py-6">
        {data.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((property) => (
                <CardProperty key={property._id} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
