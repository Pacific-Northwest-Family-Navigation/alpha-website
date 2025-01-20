import { Image } from "@heroui/react";
import NextImage from "next/image";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        How can you support Pacific Northwest Family Navigation?
      </h2>
      <p className="text-l text-justify pt-4">
        We have teamed up with Gregory &amp; Kara Rider with Rider Real Estate
        and Todd Brefeld with Nexa Mortgage. These folks are AMAZING!! If you
        buy a home from Greg and Kara, they will donate 10% of their commission
        to Pacific Northwest Family Navigation! If you finance with Todd, he
        will give you a free home appraisal worth up to $800. How awesome is
        that? Not only do you get an amazing new home but you get to help your
        favorite non-profit! Whoo-hoo! The only catch? You have to tell them we
        sent you! Check out what they have to offer below!
      </p>
      <div className="flex justify-center items-center pt-12">
        <Image
          src="/ridernexa.jpg"
          as={NextImage}
          alt="Rider & Nexa"
          width={695}
          height={900}
          className="m-auto"
        />
      </div>
    </div>
  );
}
