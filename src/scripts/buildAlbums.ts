import fs from'fs';
import path from 'path';
import { PhotoInfo } from "../types/photo-info";
import { FullAlbumInfo, BasicAlbumInfo } from "../types/album-info";

const albumsToLoad: BasicAlbumInfo[] = [
  {
    folderName: "sensitive-santa-2024",
    name: "Sensitive Santa 2024",
    description: "Our Sensitive Santa Event for 2024",
  },
];

const publicFolder = "./public";
const dirRelativeToPublicFolder = "albums";
const albumsFolder = path.resolve(publicFolder, dirRelativeToPublicFolder);

const albums: FullAlbumInfo[] = albumsToLoad.map(
  (albumToLoad: BasicAlbumInfo) => {
    const albumDir = path.resolve(
        albumsFolder,
      albumToLoad.folderName
    );
    const files = fs.readdirSync(albumDir);
    const photos: PhotoInfo[] = [];
    files.forEach((filename: string) => {
      if (filename.endsWith(".jpg")) {
        photos.push({ filename });
      }
    });
    return {
      folderName: albumToLoad.folderName,
      name: albumToLoad.name,
      description: albumToLoad.description,
      photos,
    };
  }
);

const albumFileName = "albums.json";
const albumFilePath = path.resolve("./src/data", albumFileName);

fs.writeFileSync(albumFilePath, JSON.stringify(albums, null, 2));