import { Image } from "@heroui/react";
import NextImage from "next/image";

export default function SpotlightImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <>
      <div className="flex justify-center items-center pt-12">
        <Image
          src={src}
          as={NextImage}
          alt={alt}
          width={width}
          height={height}
          className="m-auto"
        />
      </div>
    </>
  );
}
