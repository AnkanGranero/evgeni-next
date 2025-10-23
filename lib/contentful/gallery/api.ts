import 'server-only';
import { TypeGalleryImageSkeleton } from '../types';
import { fetchAsset, fetchEntries } from '../api';
import { createImageObject } from '../image';



export async function getGalleryImages() {
  const response = await fetchEntries<TypeGalleryImageSkeleton>('galleryImage');
  const assets = response.includes?.Asset?.map(item => createImageObject(item));
   return assets;
}

export async function getFullImage(assetId: string) {
    const response = await fetchAsset(assetId);
    const asset = createImageObject(response);
    
    return asset;
}
