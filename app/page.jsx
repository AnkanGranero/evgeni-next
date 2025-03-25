import { getPresentationText } from "@/lib/contentfulUtils"
export default async function Home() {
  const presentationText = await getPresentationText();

  return (
    <section className="min-h-screen bg-fixed bg-center bg-cover bg-[url('/Evgeni_Leonov_foto.jpg')] flex items-center justify-center px-4 py-20">
      <div className="bg-evgeni-gradient w-full max-w-3xl p-8 rounded-xl shadow-lg text-center mt-[60rem]">
        <h1 className="text-6xl font-bold mb-6">Hej</h1>
        <div className="prose lg:prose-lg text-2xl">
          {presentationText.text}
        </div>
      </div>
    </section>
  );
}
