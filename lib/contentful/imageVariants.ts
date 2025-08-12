export type RawAsset = {
    sys: { id: string };
    fields: {
        title?: string;
        description?: string;
        file: {
            url: string;
            details?: { image?: { width: number; height: number } }
        }
    }
}

export type GalleryImage = {
    id: string;
    alt: string;
    w: number;
    h: number;
    thumbUrl: string;
    fullUrl: string;
    blurUrl: string;
}

export function buildImageVariants(asset: RawAsset): GalleryImage {
    const base = `https:${asset.fields.file.url}`;
    const w = asset.fields.file.details?.image?.width ?? 1000;
    const h = asset.fields.file.details?.image?.height ?? 1000;
    const alt = asset.fields.description ?? asset.fields.title ?? "";

    return {
        id: asset.sys.id,
        alt,
        w, h,
        thumbUrl: `${base}?w=400&h=400fit=thumb&fm=webp&q=70`,
        fullUrl: `${base}?w=1600&fm=webp&q=80`,
        blurUrl: `${base}?w=20&q=20&fm=webp`,
    }

}