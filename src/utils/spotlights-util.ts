import { BasicSpotlightInfo } from "@/types/spotlight-info";
import spotlights from "@/data/spotlights.json";

export function getAllSpotlightInfo() {
  const spotlightsInfo: BasicSpotlightInfo[] = spotlights.map(
    (jsonSpotlight) => {
      const convertedSpotlight: BasicSpotlightInfo = {
        id: jsonSpotlight.id,
        name: jsonSpotlight.name,
        year: jsonSpotlight.year,
        order: jsonSpotlight.order,
        startDate: new Date(jsonSpotlight.startDate),
        endDate: new Date(jsonSpotlight.endDate),
      };
      return convertedSpotlight;
    }
  );
  return spotlightsInfo;
}

export function getSpotlightInfo(id: string) {
  const spotlightInfo: BasicSpotlightInfo | undefined =
    getAllSpotlightInfo().find(
      (basicSpotlight: BasicSpotlightInfo) => basicSpotlight.id == id
    );
  return spotlightInfo;
}
