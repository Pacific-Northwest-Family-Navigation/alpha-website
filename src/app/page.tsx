import Spotlight from "@/components/spotlights/spotlight";
import { getCurrentSpotlight } from "@/utils/spotlights-util";

export default function Home() {
  const currentSpotlight = getCurrentSpotlight();
  if (!currentSpotlight) {
    return (<></>)
  }
  return (
    <div>
      <Spotlight spotlight={currentSpotlight} />
    </div>
  );
}
