"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Donate() {
  return (
    <>
      <div>
        <div className="text-center p-1">
          Help us grow our mission to support families, enrich lives, and build
          communities.
        </div>
        <div className="p-2 flex justify-center">
          <Button
            color="primary"
            className="m-auto"
            onPress={() => {
              redirect(
                "https://www.paypal.com/donate/?hosted_button_id=FS3GS9S45G3D4"
              );
            }}
          >
            Donate Now
          </Button>
        </div>
        <div className="p-2">
          <Link href="https://www.paypal.com/donate/?hosted_button_id=FS3GS9S45G3D4">
            <Image
              alt="Donate Now"
              src="/PNW-Family-Navigation-Donation-QR-Code.png"
              loading="eager"
              width={100}
              height={100}
              draggable={false}
              className="m-auto"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
