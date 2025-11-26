import { Location, Image as PropertyImage, Rate } from "@/app/generated/prisma";
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
  const getRateDisplay = () => {
    if (property.rate.monthly) {
      return `$${property.rate.monthly}/mo`;
    } else if (property.rate.weekly) {
      return `$${property.rate.weekly}/wk`;
    } else if (property.rate.nightly) {
      return `$${property.rate.nightly}/nigth`;
    }
  };
  return (
    <article className="flex flex-col justify-between rounded-xl shadow-md relative bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={`/images/properties/${property.images[0].url}`}
        alt=""
        className="w-full h-auto rounded-t-xl"
      />
      <div className="flex flex-col justify-between h-full p-4">
        <div className="text-left md:text-center lg:text-left mb-2">
          <div className="">{property.type}</div>
          <h3 className="text-2xl md:text-2xl lg:text-xl xl:text-3xl font-bold">
            {property.name}
          </h3>
        </div>
        <h3 className="absolute top-2.5 right-2.5 bg-white px-4 py-2 rounded-lg text-blue-100 dark:text-blue-800 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 mb-4">
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

        <div className="flex justify-center gap-4 text-green-100 dark:text-green-800 text-sm mb-2">
          <p className="flex items-center gap-x-1">
            <FaMoneyBill className="" /> Weekly
          </p>
          <p className="flex items-center gap-x-1">
            <FaMoneyBill className="" /> Monthly
          </p>
        </div>

        <div className="border border-gray-100 dark:border-b-gray-800 mb-2"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle items-center gap-2 mb-4 lg:mb-0 text-orange-100 dark:text-orange-800">
            <FaMapMarked className="text-lg " />
            <span className="">
              {property.location?.city} {property.location?.state}
            </span>
          </div>
          <Link
            href={`properties/${property.id}`}
            className="h-9 bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 hover:dark:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
