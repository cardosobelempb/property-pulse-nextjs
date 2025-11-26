import InfoBox from "./info-box";

export default function InfoBoxes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 rounded-lg">
      <InfoBox
        heading="For Renters"
        btn={{
          href: "/properties",
          heading: "Browse Properties",
          backgroundColor:
            "bg-gray-100 text-gray-800 hover:bg-gray-700 hover:text-gray-100",
          textColor: "text-white dark:text-black",
        }}
      >
        Find your dream rental property. Bookmark properties and contact owners.
      </InfoBox>
      <InfoBox
        heading="For Property Owners"
        backgroundColor="bg-blue-100 dark:bg-blue-800"
        btn={{
          href: "/property/add",
          heading: "Add Property",
          backgroundColor: "bg-blue-500 dark:bg-blue-500 hover:bg-blue-600",
          textColor: "text-white dark:text-white hover:text-white",
        }}
      >
        List your properties and reach potential tenants. Rent as an airbnb or
        long term.
      </InfoBox>
    </div>
  );
}
