import { getPresentationText } from "@/lib/contentful/richText"
import Hero from "./components/Hero"
export default async function Home() {
  const presentationText = await getPresentationText();

  return (
      <Hero text={presentationText.text}></Hero>
  );
}
