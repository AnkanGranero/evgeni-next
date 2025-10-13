import { GalleryImage } from '@/lib/contentful/types';
import Image from "next/image"

export default function ImageDetail({ image }: { image: GalleryImage }) {
  return (
    <div className="space-y-3">
      <Image src={image.fullUrl} alt={image.id} className=" mx-auto block max-w-full max-h-[90vh] rounded-xl object-contain" width={image.w} height={image.w}/>
    </div>
  );
}
