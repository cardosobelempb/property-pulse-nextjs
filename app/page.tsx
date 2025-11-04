import Hero from "./components/hero";
import InfoBoxes from "./components/info-boxes";
import RecentProperty from "./components/properties/RecentProperty";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <RecentProperty />
    </>
  );
}
