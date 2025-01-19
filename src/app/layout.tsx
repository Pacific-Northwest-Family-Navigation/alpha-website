import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/components/navigation/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pacific Northwest Family Navigation",
  description: "Supporting Families, Enriching Lives, Building Communities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <NextUIProvider>
          <div className="w-5/6 bg-slate-200 mx-auto min-h-dvh">
            <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
              {/* <div>
                <Image
                  src="/logo.png"
                  alt="Pacific Northwest Family Navigation Logo"
                  width={150}
                  height={150}
                />
              </div> */}
              {/* <div>
                <p className="full"><Navigation></Navigation></p>
              </div> */}
              {/* <div>
                <p className="mt-8 text-4xl font-bold text-center">
                  Pacific Northwest Family Navigation
                </p>
                <p className="mt-4 text-xl text-center">
                  Supporting Families, Enriching Lives, Building Communities
                </p>
              </div> */}
              <Navigation></Navigation>
            </header>
            <main className="p-10">{children}</main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <p className="text-sm text-center pt-4">
                Our volunteers are working on building our website. Please be
                patient.
              </p>
            </footer>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
