import { getPresentationText } from "@/lib/contentfulUtils"
import Hero from "./components/Hero"
export default async function Home() {
  const presentationText = await getPresentationText();

  return (
      <Hero text={presentationText.text}></Hero>
  );
}
