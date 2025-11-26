import { ContentLayout } from "./layout/ContentLayout";
import FormSearch from "./shared/FormSearch";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Find The Perfect Rental
        </h1>
        <p className="my-4 text-xl text-white">
          Discover the perfect property that suits your needs.
        </p>
      </div>
      {/* <!-- Form Component --> */}
      <FormSearch />
    </div>
  );
}
