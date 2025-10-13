import { getPresentationText } from '@/lib/contentful/rich-text';
import ParallaxText from '@/components/parallax-text';
export default async function Home() {

  const { text } = await getPresentationText();
  return (
    <div className="min-h-screen">
    <ParallaxText text={text} background="/Evgeni_Leonov_foto.jpg"/>
    </div>
  );
}
