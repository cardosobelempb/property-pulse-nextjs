import { Location, Rate } from "@/app/generated/prisma";
import { SellerInfo } from "./SellerInfo";

export type Property = {
  id: string;
  name: string;
  type: string;
  description: string;
  beds: number;
  baths: number;
  squareFeet: number;
  amenities: string[];
  rates: Rate[];
  images: string[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  ownerId: string;
  location: Location;
};

export type Properties = Property[];
