"use client";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Share from "yet-another-react-lightbox/plugins/share";
import Download from "yet-another-react-lightbox/plugins/download";

import { FullAlbumInfo } from "@/types/album-info";
import NextJsImage from "./nextJsImage";
import { useState } from "react";

export default function Gallery({
  album, buttonText
}: {
  album: FullAlbumInfo | undefined;
  buttonText:string
}) {
  const [open, setOpen] = useState(false);
  const slides: SlideImage[] =
    album === undefined
      ? []
      : album.photos.map((photo) => {
          return {
            src: "/albums/" + album?.folderName + "/" + photo.filename,
            width: 2048,
            height: 1366,
            title: photo.filename,
            alt: photo.filename,
          };
        });
  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <div className="items-center justify-center text-center p-4">
        <button
          onClick={toggleOpen}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          {buttonText}
        </button>
      </div>
      <Lightbox
        slides={slides}
        open={open}
        close={() => setOpen(false)}
        render={{ slide: NextJsImage }}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Counter, Share, Download]}
      />
    </>
  );
}
