import Spotlight from "@/components/spotlights/spotlight";
import { getSpotlightInfo } from "@/utils/spotlights-util";

export default function Home() {
  const currentSpotlight = getSpotlightInfo("2025-columbia-pacific-therapy");
  if (!currentSpotlight) {
    return (<></>)
  }
  return (
    <div>
      <Spotlight spotlight={currentSpotlight} />
    </div>
  );
}
