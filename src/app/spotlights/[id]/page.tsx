import Spotlight from "@/components/spotlights/spotlight";
import { BasicSpotlightInfo } from "@/types/spotlight-info";
import { getAllSpotlightInfo, getSpotlightInfo } from "@/utils/spotlights-util";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id: string = (await params).id;
  const spotlight: BasicSpotlightInfo|undefined = getSpotlightInfo(id);
  if (!spotlight) {
    return <>Spotlight not found</>
  }
  return <Spotlight spotlight={spotlight} />;
}

export function generateStaticParams() {
  return getAllSpotlightInfo().map((spotlight) => {
    return { id: spotlight.id };
  });
}

export const dynamicParams = false;
