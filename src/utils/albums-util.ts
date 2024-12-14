'use server'

import { BasicAlbumInfo, FullAlbumInfo } from "@/types/album-info"
import { PhotoInfo } from "@/types/photo-info"
import fs from "fs"
import path from "path"


const albumsToLoad:BasicAlbumInfo[] = [{
    folderName:"sensitive-santa-2024",
    name: "Sensitive Santa 2024",
    description: "Our Sensitive Santa Event for 2024"
  }]
  
export async function getAllAlbums(): Promise<FullAlbumInfo[]> {

  const dirRelativeToPublicFolder = 'albums'

  const albums:FullAlbumInfo[] = albumsToLoad.map((albumToLoad:BasicAlbumInfo) => {
    const albumDir = path.resolve("./public", dirRelativeToPublicFolder, albumToLoad.folderName);
    const files = fs.readdirSync(albumDir)
    const photos:PhotoInfo[] = [];
    files.forEach((filename:string) => {
      if (filename.endsWith('.jpg')) {
        photos.push({filename})
      }
    });
    return {
      folderName: albumToLoad.folderName, 
      name: albumToLoad.name, 
      description: albumToLoad.description, 
      photos}
  })

  return albums;
}

