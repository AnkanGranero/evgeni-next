import { getPresentationText } from "@/lib/contentfulUtils"

export default async function Home() {

  const presentationText = await getPresentationText();
  console.log("entries ..",presentationText);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img className="w-[90%] md:w-1/2" src={presentationText.headerImage} />
      <h1 className="text-3xl font-bold mt-12">Hej</h1>
      <div className="w-[90%] md:w-1/2 prose lg:prose-lg mt-4 text-center">
        {presentationText.text}
      </div>
    </div>
  );
}
