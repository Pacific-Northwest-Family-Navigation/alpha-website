import { BasicSpotlightInfo, SpotlightInfo } from "@/types/spotlight-info";
import spotlightJson from "@/data/spotlight-info.json";

const spotlightInfo: SpotlightInfo = {
  currentSpotlightId: spotlightJson.currentSpotlightId,
  spotlights: spotlightJson.spotlights.map(
    (jsonSpotlight) => {
      const convertedSpotlight: BasicSpotlightInfo = {
        id: jsonSpotlight.id,
        name: jsonSpotlight.name,
        year: jsonSpotlight.year,
        order: jsonSpotlight.order,
        startDate: new Date(jsonSpotlight.startDate),
        endDate: new Date(jsonSpotlight.endDate),
        visible: jsonSpotlight.visible,
      };
      return convertedSpotlight;
    }
  ),
};

export function getCurrentSpotlight() {
  const currentSpotlight = getSpotlightInfo(spotlightInfo.currentSpotlightId);
  return currentSpotlight;
}

export function getAllSpotlightInfo() {
  return spotlightInfo.spotlights;
}

export function getSpotlightInfo(id: string) {
  const spotlightInfo: BasicSpotlightInfo | undefined =
    getAllSpotlightInfo().find(
      (basicSpotlight: BasicSpotlightInfo) => basicSpotlight.id == id
    );
  return spotlightInfo;
}
