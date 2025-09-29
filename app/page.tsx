import { getPresentationText } from '@/lib/contentful/richText';
import { notFound } from 'next/navigation';
import Hero from './components/Hero';
export default async function Home() {
  const presentationsText = await getPresentationText();
  console.log(presentationsText, "texten");
  

  if(!presentationsText) return notFound();

  return (
    <div className="min-h-screen">
      <Hero presentationText={presentationsText}></Hero>
    </div>
  );
}
