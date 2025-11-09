import {
  Amenity,
  Location,
  Property,
  Rate,
  Image as PropertyImage,
  User,
} from "@/app/generated/prisma";
import { PropertyEntity } from "@/domain/entities/PropertyEntity";
import Image from "next/image";
import Link from "next/link";
import {
  FaBath,
  FaBed,
  FaMapMarked,
  FaMoneyBill,
  FaRulerCombined,
} from "react-icons/fa";

export interface CardPropertyProps {
  property: {
    id: string;
    description: string;
    name: string;
    baths: number;
    beds: number;
    squareFeet: number;
    type: string;
    images: PropertyImage[];
    location: Location;
    rate: Rate;
  };
}

export default function CardProperty({ property }: CardPropertyProps) {
  console.log("Images =>", property.images[0].url);
  const getRateDisplay = () => {
    console.log(property.rate);
    if (property.rate.monthly) {
      return `$${property.rate.monthly}/mo`;
    } else if (property.rate.weekly) {
      return `$${property.rate.weekly}/wk`;
    } else if (property.rate.nightly) {
      return `$${property.rate.nightly}/nigth`;
    }
  };
  return (
    <article className="rounded-xl shadow-md relative">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={`/images/properties/${property.images[0].url}`}
        alt=""
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold text-gray-800">{property.name}</h3>
        </div>
        <h3 className="absolute top-2.5 right-2.5 bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p className="">
            <FaBed className="" /> {property.beds}{" "}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="" />
            {property.baths} <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="" />
            {property.squareFeet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p className="flex gap-x-1">
            <FaMoneyBill className="" /> Weekly
          </p>
          <p className="flex gap-x-1">
            <FaMoneyBill className="" /> Monthly
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarked className="text-lg text-orange-700" />
            <span className="text-orange-700">
              {property.location?.city} {property.location?.state}
            </span>
          </div>
          <Link
            href={`property/${property.id}`}
            className="h-9 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
