import { Location } from "./Location";
import { Rates } from "./Rates";
import { SellerInfo } from "./SellerInfo";

export type Property = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  beds: number;
  baths: number;
  squareFeet: number;
  amenities: string[];
  rates: Rates;
  sellerInfo: SellerInfo;
  images: string[];
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Properties = Property[];
