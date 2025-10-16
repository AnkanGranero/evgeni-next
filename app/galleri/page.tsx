import { getGalleryImages } from '@/lib/contentful/gallery/api';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  const images = await getGalleryImages();

  return (
    <ul className="mt-[8rem] grid grid-cols-2 md:grid-cols-5 gap-2 p-0 list-none">
      {images.map((image) => (
        <li key={image.id}>
          <Link
            className="aspect-square overflow-hidden cursor-pointer"
            href={`/gallery/${image.id}`}
          >
            <Image
              className="w-full h-full object-cover block"
              src={image.fullUrl}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
