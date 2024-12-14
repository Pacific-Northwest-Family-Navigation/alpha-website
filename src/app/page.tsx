import Gallery from "@/components/gallery/gallery";
import albums from "../data/albums.json";

export default function Home() {
  const selectedAlbum = albums[0];

  return (
    <div className="">
      <p className="text-l text-center pt-4">
        Our volunteers are working on building our website. Please be patient. In the meantime, check out some of our past events.
      </p>
      <div>
        <h1 className="text-4xl font-bold text-center py-5">2024 Sensitive Santa</h1>
        <div className="py-4">
          The Vancouver Washington Autism Mom&apos;s Support Group Hosted their
          Annual Sensitive Santa event on Saturday, December 7th, 2024, at the
          Elk&apos;s Lodge #823. It was an amazing experience for children,
          young and old to get to visit our sensory friendly Santa. This year,
          the numbers tripled from last year with a total of 343 people coming
          through the doors. The Giving Trees graciously donated 25 freshly cut
          Douglas Fir trees, tree stands and a gift bag full of ornaments,
          lights and other goodies to decorate the trees for families in need.
          The City of Vancouver provided a grant to help the organization
          purchase 10 tables full of craft activities. Columbia Pediatrics,
          Skipping Stones, Inclusive Services NW and Hispanic Support Services
          were on hand helping the children with the crafts. Raider Nation
          Wrecking Crew Vancouver volunteered hauling trees, passing them out,
          providing the photography services and providing freshly baked treats!
          The community truly came together to help the special needs community!
        </div>
      </div>
      <Gallery album={selectedAlbum} buttonText="View Gallery" />
    </div>
  );
}
