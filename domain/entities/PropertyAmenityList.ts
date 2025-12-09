import { WatchedListAbstract } from "@/shared";
import { PropertyAmenity } from "./PropertyAmenity";

export class PropertyAmenityList extends WatchedListAbstract<PropertyAmenity> {
  protected getItemKey(item: PropertyAmenity): string {
    return item.id.getValue();
  }
  compareItems(a: PropertyAmenity, b: PropertyAmenity): boolean {
    return a.amenityId.equals(b.amenityId);
  }
}
