import { ReactNode } from "react";


type HeroProps = {
  presentationText: {
    text: ReactNode;
    headerImage: string;
  };
};
export default function Hero({presentationText} :  HeroProps) {
  const { text } = presentationText;
  return (

    <div className="min-h-screen">
      <div
        className="bg-center min-h-[100vh] md:min-h-screen w-full bg-no-repeat bg-[url(/Evgeni_Leonov_foto.jpg)]"
      />

      <section
        className="flex justify-center w-full bg-test-500"
      >
        <article className="text-white text-center max-w-5xl md:text-3xl p-8">{text}</article>
      </section>
    </div>


  );
}
