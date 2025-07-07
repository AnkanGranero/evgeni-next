import { getGalleryImages } from "@/lib/contentfulUtils"
import { useState } from "react";
export default async function Gallery() {

    const galleryImages = await getGalleryImages();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgUrl:string) => {
        setIsModalOpen(true);
        setSelectedImage(imgUrl);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    }






    return (
        <main>
            <p> {console.log(galleryImages)}
            </p>
            <ul className="mt-[8rem] grid grid-cols-5 gap-2 p-0 list-none">
                {galleryImages.map(item => (
                    <li className="aspect-square overflow-hidden cursor-pointer" key={item.url} onClick={() => openModal(item.url)}>
                        <img className="w-full h-full object-cover block" src={item.url} alt="" />
                    </li>
                ))}
            </ul>
        </main>
    )
}