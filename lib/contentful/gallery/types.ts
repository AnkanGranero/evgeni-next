import { CFAsset } from "../types";

export type GalleryImage = {
  id: string;
  alt: string;
  w: number;
  h: number;
  thumbUrl: string;
  fullUrl: string;
  blurUrl: string;
};

export type GalleryEntry = {
  sys: { id: string };
  fields: { image?: CFAsset };
};