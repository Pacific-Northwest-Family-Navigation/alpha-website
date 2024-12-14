import Image from "next/image";
import {
    ContainerRect,
  isImageFitCover,
  isImageSlide,
  Slide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";

function isNextJsImage(slide: Slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

function getSlideWidth(slide: Slide, cover:boolean, rect: ContainerRect) {
  let width = rect.width;
  if (cover && slide.width && slide.height) {
      width = Math.min(rect.width, (rect.height / slide.height) * slide.width);
  }
  return width;
}

function getSlideHeight(slide: Slide, cover: boolean, rect: ContainerRect) {
  let height = rect.height;
  if (cover && slide.width && slide.height) {
      height = Math.min(rect.height, (rect.width / slide.width) * slide.height);
  }
  return height;
}

export default function NextJsImage({ slide, offset, rect }:{
  slide: Slide;
  offset: number;
  rect: ContainerRect;}) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = getSlideWidth(slide, cover, rect);

  const height = getSlideHeight(slide, cover, rect);

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        // placeholder={slide.blurDataURL ? "blur" : undefined}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}