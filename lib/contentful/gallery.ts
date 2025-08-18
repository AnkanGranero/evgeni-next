import 'server-only';
import { fetchEntries, client } from "./contentful";
import { buildImageVariants } from "./imageVariants";
import { GalleryEntry, GalleryImage, RawAsset } from "./types";



export async function getGalleryImages(): Promise<GalleryImage[]> {

    const items = (await fetchEntries("galleryImage")) as GalleryEntry[];

    return items
        .map((item) => item.fields?.image as RawAsset | undefined)
        .filter((asset): asset is RawAsset => !!asset?.fields?.file?.url)
        .map((asset) => buildImageVariants(asset))
}

export async function getFullImage(id: string): Promise<GalleryImage | null> {

    try {
        const asset = await client.getAsset(id);
        const raw = asset as unknown as RawAsset;
        if (!raw?.fields?.file?.url) return null;
        return buildImageVariants(raw);
    }
    catch (err) {
        console.log(err, "error");

        return null
    }

}