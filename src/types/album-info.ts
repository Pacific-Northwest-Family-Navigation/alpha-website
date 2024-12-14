import { PhotoInfo } from "./photo-info"

export type BasicAlbumInfo = {
    folderName:string,
    name: string,
    description:string,}

  export type FullAlbumInfo = BasicAlbumInfo & {
    photos: PhotoInfo[]
  }