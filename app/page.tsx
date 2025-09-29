import { getPresentationText } from '@/lib/contentful/richText';
import ParallaxHero from './components/ParallaxHero';
import { notFound } from 'next/navigation';
export default async function Home() {
  const presentationsText = await getPresentationText();
  console.log(presentationsText, "texten");
  

  if(!presentationsText) return notFound();

  return (
    <div className="min-h-screen">
      <ParallaxHero presentationsText={presentationsText}></ParallaxHero>
    </div>
  );
}
