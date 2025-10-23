import { getPresentationText } from '@/lib/contentful/presentation/api';
import ParallaxText from '@/components/parallax-text';
export default async function Home() {
  const { text, headerImage } = await getPresentationText();
  return (
    <div className="min-h-screen">
      <ParallaxText text={text} background={headerImage.fullUrl} />
    </div>
  );
}
