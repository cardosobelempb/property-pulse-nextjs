import { Amenity } from "@/domain/entities/Amenity";
import { Location } from "@/domain/entities/Location";
import { Rate } from "@/domain/entities/Rate";
import { FaBath, FaBed, FaCheck, FaRulerCombined } from "react-icons/fa";
import { FaLocationDot, FaXmark } from "react-icons/fa6";
import { BoxLayout } from "../layout/BoxLayout";
import { Image } from "@/domain/entities/Image";
import { PropertyAmenityList } from "@/domain/entities/PropertyAmenityList";
import { PropertyHttpResponse } from "@/infra/presenters/property.presenter";

export interface PropertyDetailsProps {
  property: PropertyHttpResponse;
}

export default async function PropertyDetails({
  property,
}: PropertyDetailsProps) {
  return (
    <BoxLayout className="col-start-1 col-end-13 lg:col-start-1 lg:col-end-9">
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property?.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property?.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaLocationDot className="text-lg text-orange-700 mr-2" />
          <p className="text-orange-700 flex gap-x-1.5 items-center">
            {property?.location?.street}, {property?.location?.city}{" "}
            {property?.location?.zipcode}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            {property.rate.nightly ? (
              `$${property.rate.nightly.toLocaleString()}`
            ) : (
              <div className="text-2xl font-bold text-blue-500">
                <FaXmark className="text-red-700" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rate.weekly ? (
                `$${property.rate.weekly.toLocaleString()}`
              ) : (
                <div className="text-2xl font-bold">
                  <FaXmark className="text-red-700" />
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rate.monthly ? (
                `$${property.rate.monthly.toLocaleString()}`
              ) : (
                <div className="text-2xl font-bold">
                  <FaXmark className="text-red-700" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-sm space-x-9">
          <p className="flex items-center gap-x-1.5">
            <FaBed /> {property?.beds}
            <span className="hidden sm:inline">Beds</span>
          </p>
          <p className="flex items-center gap-x-1.5">
            <FaBath /> {property?.baths}
            <span className="hidden sm:inline">Baths</span>
          </p>
          <p className="flex items-center gap-x-1.5">
            <FaRulerCombined />
            {property?.squareFeet}
            <span className="hidden sm:inline">sqft</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">{property?.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities?.getItems().map((amenity) => (
            <li key={`${amenity.id}`} className="flex items-center gap-x-1.5">
              <FaCheck className="text-green-600" />
              {amenity.name}
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Map --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </BoxLayout>
  );
}
