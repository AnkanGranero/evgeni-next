import Image from "next/image";
import { getFullImage } from "@/lib/contentful/gallery/api"


export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
        const img = await getFullImage(id)
    if (!img) return null;

    return (
        < div className="mx-auto" >
            <Image
                src={img.fullUrl}
                alt={img.description?? ""}
                width={img.dimensions?.width}
                height={img.dimensions?.height}
                className="rounded-xl"
                priority
                sizes="90vw"
            />

        </div >

    )
}

