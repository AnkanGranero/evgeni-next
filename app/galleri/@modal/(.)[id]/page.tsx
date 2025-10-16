import Modal from '@/components/modal';
import ImageDetail from '@/components/image-detail';
import { getFullImage } from '@/lib/contentful/gallery/api';
import { notFound } from 'next/navigation';

export default async function GalleryImageModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
