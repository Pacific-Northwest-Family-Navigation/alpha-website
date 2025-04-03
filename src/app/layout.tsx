import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/system";
import Navigation from "@/components/navigation/navigation";
import Donate from "@/components/navigation/donate";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUIProvider>
          <div className="w-5/6 bg-[--background] mx-auto min-h-dvh">
            <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center bg-[--navigation-background] text-[--navigation-foreground]">
              <Navigation></Navigation>
            </header>
            <main className="p-10">{children}</main>
            <footer className="row-start-3 display:block gap-6 items-center justify-center pt-2 bg-[--navigation-background] text-[--navigation-foreground]">
              <Donate></Donate>
              <div className="text-sm text-center pt-2">
                
              </div>
            </footer>
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
