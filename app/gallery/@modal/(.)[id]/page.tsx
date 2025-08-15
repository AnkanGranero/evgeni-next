import Modal from '@/app/components/Modal';
import ImageDetail from '@/app/components/ImageDetail';
import { getFullImage } from '@/lib/contentful/gallery';
import { notFound } from 'next/navigation';

export default async function GalleryImageModal({ params }: { params: { id: string } }) {
  const { id } = params;
  const image = await getFullImage(id);
  if (!image) {
    return notFound();
  }  
  return (
    <Modal>
      <ImageDetail image={image}></ImageDetail>
    </Modal>
  );
}
