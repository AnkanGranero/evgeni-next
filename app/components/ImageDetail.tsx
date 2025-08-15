import { GalleryImage } from '@/lib/contentful/types';

export default function ImageDetail({ image }: { image: GalleryImage }) {
  return (
    <div className="space-y-3">
      <img src={image.fullUrl} alt={image.id} className=" mx-auto block max-w-full max-h-[90vh] rounded-xl object-contain" />
      <div className="text-sm text-gray-600">Bild-ID: {image.id}</div>
    </div>
  );
}
