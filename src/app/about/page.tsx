import { Image } from "@heroui/react";
import NextImage from "next/image";

export default function Story() {
  return (
    <div>
      <p>
        Pacific Northwest Family Navigation is a non-profit organization rooted
        in advocacy, education, and resource distribution. Our story began in
        2012 with Melissa Dodge, founder of the Vancouver, Washington
        Mom&rsquo;s Autism Support group. For over a decade, this group has been
        a lifeline for families, offering support, hosting sensory-sensitive
        events, and connecting caregivers with invaluable resources.
      </p>
      <p>&nbsp;</p>
      <p>
        Building on that foundation, Pacific Northwest Family Navigation expands
        this vital work to create a broader, more impactful community hub. We
        are dedicated to empowering families and caregivers of children with
        developmental delays and disabilities by connecting them to resources,
        providing educational opportunities, and advocating for their needs.
      </p>
      <p>&nbsp;</p>
      <p>
        Collaboration is at the heart of what we do. By working with local
        organizations and embracing cultural sensitivity, we strive to ensure
        every family feels welcomed and supported. Whether you&rsquo;re seeking
        resources, advocacy, or community, Pacific Northwest Family Navigation
        is here to help you navigate the journey.
      </p>
      <p>&nbsp;</p>
      <p>
        Contact us today to learn how we can support you and your family.
        Together, we can build a stronger, more inclusive community.
      </p>
      <p>&nbsp;</p>
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
