import { getGalleryImages } from "@/lib/contentful/contentfulUtils.js"
import Link from "next/link";
import Image from "next/image";

export default async function Page() {

    const images = await getGalleryImages();
    console.log("images", images);

    return (
        <ul className="mt-[8rem] grid grid-cols-5 gap-2 p-0 list-none">
            {images.map(image => (
                <Link className="aspect-square overflow-hidden cursor-pointer" key={image.alt} href={`/gallery/photo/${image.id}`}>
                    <Image className="w-full h-full object-cover block" src={image.fullUrl} width={500}
                        height={500}
                        alt="Picture of the author" />
                </Link>
            ))}
        </ul>
    )
}