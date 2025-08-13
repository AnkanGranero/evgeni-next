import Image from "next/image";
import { getFullImage } from "@/lib/contentful/gallery"


export default async function PhotoModal({ params }: { params: { id: string } }) {
    const img = await getFullImage(params.id)
    if (!img) return null;

    return (
        < div className="mx-auto" >
            <Image
                src={img.fullUrl}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className="rounded-xl"
                priority
                sizes="90vw"
            />

        </div >

    )
}

