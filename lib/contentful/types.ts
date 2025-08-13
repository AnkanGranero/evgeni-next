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

export type CFImageFile = {
  url?: string;
  details?: { image?: { width?: number; height?: number } };
};

export type CFAsset = {
  fields?: {
    title?: string;
    description?: string;
    file?: CFImageFile;
  };
};

export type GalleryEntry = {
  sys: { id: string };
  fields: { image?: CFAsset };
};