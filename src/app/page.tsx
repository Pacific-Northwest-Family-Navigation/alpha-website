import { Image } from "@heroui/react";
import NextImage from "next/image";

export default function Home() {
  return (
    <div>
      <p class="text-2xl font-bold text-center">Supporting Families, Enriching Lives, Building Communities</p>
    <p class="text-center text-lg pt-4">Each week we will be spotlighting a different community resource.</p>
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
      <h2 className="text-4xl font-bold mb-2 text-center font-[cursive]">
        Inclusive Support Services NW
      </h2>
      <p>
        At Inclusive Support Services NW, we serve individuals ages 4 to 104,
        offering personalized support, skill-building, and a whole lot of fun!
        Based on lived experience and a passion for inclusivity, we are
        dedicated to empowering lives and creating a vibrant, welcoming
        community.
      </p>
      <p className="text-lg font-bold mb-2 mt-4">What We Do:</p>
      <ul className="ml-4">
        <li>
          <h3 className="text-m font-bold mb-1">Education &amp; Training:</h3>
          <p className="ml-4">
            Empower families and caregivers with practical knowledge.
          </p>
        </li>
        <li>
          <h3 className="text-m font-bold mb-1">Life Skills Development:</h3>
          <p className="ml-4">
            Cooking, self-advocacy, safety awareness, and daily living skills
            for independence.
          </p>
        </li>
        <li>
          <h3 className="text-m font-bold mb-1">Creative Activities:</h3>
          <p className="ml-4">
            Sip and Paint, crafts, and more to inspire creativity.
          </p>
        </li>
        <li>
          <h3 className="text-m font-bold mb-1">
            Social &amp; Community Engagement:
          </h3>
          <p className="ml-4">
            Dance parties, Bingo, Coffee, Tea &amp; Scones gatherings, and movie
            nights.
          </p>
        </li>
      </ul>
      <p className="text-lg font-bold mb-2 mt-4">Why Choose Us?</p>
      <ul className="ml-4">
        <li>
          <h3 className="text-m font-bold mb-1">
          Tailored Support:
          </h3>
          <p className="ml-4">
          Services customized for every individual&rsquo;s
          unique needs.
          </p>
        </li>
        <li>
          <h3 className="text-m font-bold mb-1">
          Fun-Focused Learning:
          </h3>
          <p className="ml-4">
          We make personal growth exciting and engaging.
          </p>
        </li>
        <li>
          <h3 className="text-m font-bold mb-1">
          Inclusive Community:
          </h3>
          <p className="ml-4">
          Everyone feels valued, supported, and connected.
          </p>
        </li>
      </ul>
      <p className="text-lg font-bold mb-2 mt-4">Upcoming Events:</p>
      <ul className="ml-4">
        <li>
          <h3 className="text-m font-bold mb-1">
          Cooking Classes:
          </h3>
          <p className="ml-4">
          Kicking off in February&mdash;learn kitchen safety and
          whip up delicious meals.
          </p>
        </li>
        <li>
          <h3 className="text-m font-bold mb-1">
          Valentine&rsquo;s Dance Parties:
          </h3>
          <p className="ml-4">
          Celebrate love and movement this
          February.
          </p>
        </li>
        <li>
          <h3 className="text-m font-bold mb-1">
          Social Gatherings:
          </h3>
          <p className="ml-4">
          Bingo, crafts, and shared fun for all ages.
          </p>
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        At Inclusive Support Services NW, we believe that growth and joy go
        hand-in-hand. Whether you&rsquo;re learning new skills, building
        confidence, or making lifelong friends, we&rsquo;re here to help you
        thrive.
      </p>
      <p>&nbsp;</p>
      <ul>
        
      <li>
          <h3 className="text-m font-bold mb-1">
          Join the Fun:
          </h3>
          <p className="ml-4">
          Visit us at
        <a href="http://www.2be-inclusive.com/"> www.2be-inclusive.com</a> and
        see how we can support you or your loved ones in achieving a fulfilling,
        independent future!
          </p>
        </li>
      </ul>
      <div className="flex justify-center items-center pt-12">
        <Image
          src="/spotlight/2be-inclusive.jpg"
          as={NextImage}
          alt="Rider & Nexa"
          width={768/2}
          height={1024/2}
          className="m-auto"
        />
      </div>
    </div>
  );
}
