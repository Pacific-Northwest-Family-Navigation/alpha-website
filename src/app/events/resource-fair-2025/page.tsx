import { Image } from "@heroui/react";
import NextImage from "next/image";

export default function ResourceFair() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-5">
        Developmental Disabilities Resource Fair 2025
      </h1>
      <p className="text-lg pt-2">
        Join us for Pacific Northwest Family Navigation&apos;s first{" "}
        <b>Developmental Disabilities Resource Fair</b>! This is a fantastic
        opportunity to connect with community members, explore resources, and
        learn more about services for individuals with developmental
        disabilities.
      </p>
      <h2 className="text-lg font-bold mb-2 mt-4">Event Details:</h2>
      <ul className="mb-4">
        <li className="ml-2">
          <h3 className="text-m font-bold mb-1">Date:</h3>
          <p className="mb-2">Saturday, March 15, 2025</p>
        </li>
        <li className="ml-2">
          <h3 className="text-m font-bold mb-1">Time:</h3>
          <p className="mb-2">12:00 pm – 3:00 pm</p>
        </li>
        <li className="ml-2">
          <h3 className="text-m font-bold mb-1">Location:</h3>
          <p className="mb-2">The Gathering Place</p>
          <p className="mb-2">2500 NE 78th Street, Vancouver, WA 98665</p>
        </li>
      </ul>
      <h2 className="text-lg font-bold mb-2 mt-4">What to Expect:</h2>
      <ul className="mb-4">
        <li className="ml-2">
          <p className="mb-2">Free admission and ample parking.</p>
        </li>
        <li className="ml-2">
          <p className="mb-2">
            Refreshments will be available with a suggested donation, supporting
            our non-profit organization.
          </p>
        </li>
        <li className="ml-2">
          <p className="mb-2">
            A special visit from the Easter Bunny for fun photo opportunities!
          </p>
        </li>
      </ul>
      <h2 className="text-lg font-bold mb-2 mt-4">Photography Notice:</h2>
      <p className="text-lg">
        Please note that photos will be taken during the event. These photos may
        be used on our website and social media to showcase our events and
        activities. If you prefer not to have your image appear, please let our
        staff know when you arrive.
      </p>
      <h2 className="text-lg font-bold mb-2 mt-4">Contact Us:</h2>
      <p className="text-lg">
        For questions or additional information, reach out to Melissa Dodge,
        Executive Director, at:
      </p>

      <div className="mb-4 pl-4">
        <p className="text-lg">
          <a href="tel:360-901-0492">360-901-0492</a>
        </p>
        <p className="text-lg">
          Email:&nbsp;&nbsp;
          <a href="mailto:melissa@pnwfamilynavigation.org">
            melissa@pnwfamilynavigation.org
          </a>
        </p>
      </div>
      <p className="text-lg pb-2">
        We can’t wait to see you there!
      </p>
      <Image
        src="/events/pnw-family-navigation-resource-fair-2025-1.jpg"
        as={NextImage}
        alt="Developmental Disabilities Resource Fair"
        width={695}
        height={900}
      />
    </div>
  );
}
