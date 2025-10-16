export type RawAsset = {
  sys: { id: string };
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      details?: { image?: { width: number; height: number } };
    };
  };
};

export type CFImageFile = {
  fields: {
    file: {
      details?: { image?: { width?: number; height?: number } };
      url?: string;
    };
    title: string;
  };
};

export type CFAsset = {
  fields?: {
    title?: string;
    description?: string;
    file?: CFImageFile;
  };
};
