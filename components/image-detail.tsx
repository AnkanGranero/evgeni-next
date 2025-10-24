import { ImageObject } from '@/lib/contentful/types';
import Image from "next/image"

export default function ImageDetail({ image }: { image: ImageObject }) {
  return (
    <div className="space-y-3 max-w-[75vw]">
      <Image src={image.fullUrl} alt={image.id} className=" mx-auto block max-w-full max-h-[90vh] rounded-xl object-contain" width={image.dimensions?.width} height={image.dimensions?.height}/>
    </div>
  );
}
