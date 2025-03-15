// import Spotlight from "@/components/spotlights/spotlight";
import { getCurrentSpotlight } from "@/utils/spotlights-util";

export default function Home() {
  const currentSpotlight = getCurrentSpotlight();
  if (!currentSpotlight) {
    return <></>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Resource Fair</h1>
      Hey everyone! Our resource fair is today. Please fill out the following
      form if you are here.
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSftlAaPe1nws2lUu56c3OeIzn3QFzIaRnlJ5uRs4XeydJStEw/viewform?embedded=true"
        width="640"
        height="1302"
      >
        Loading…
      </iframe>
      {/* <Spotlight spotlight={currentSpotlight} /> */}
    </div>
  );
}
