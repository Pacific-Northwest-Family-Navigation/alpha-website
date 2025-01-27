import { BasicSpotlightInfo } from "@/types/spotlight-info";
import { Image } from "@heroui/react";
import NextImage from "next/image";

export default async function Spotlight({spotlight}: {spotlight:BasicSpotlightInfo}) {
  const { default: Post } = await import(`@/spotlights/${spotlight.id}.mdx`);
  return (
    <>
      <h1 className="text-2xl font-bold text-center">
        Supporting Families, Enriching Lives, Building Communities
      </h1>
      <p className="text-center text-lg pt-2">
        Each week we will be spotlighting a different community resource.
      </p>
      <div className="flex justify-center items-center p-6">
        <Image
          src="/spotlight/in-the-spotlight.jpg"
          as={NextImage}
          alt="In the Spotlight"
          width={350}
          height={146}
          // className="m-auto"
        />
      </div>
      <Post />
    </>
  );
}
