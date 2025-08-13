import { getRawAsset } from "node:sea";
import { fetchEntries } from "./contentful";
import { buildImageVariants } from "./imageVariants";
import { GalleryEntry, GalleryImage, RawAsset } from "./types";



export async function getGalleryImages(): Promise<GalleryImage[]> {

    const items = (await fetchEntries("galleryImage")) as GalleryEntry[];

    return items
        .map((item) => item.fields?.image as RawAsset | undefined)
        .filter((asset): asset is RawAsset => !!asset?.fields?.file?.url)
        .map((asset) => buildImageVariants(asset))
}
