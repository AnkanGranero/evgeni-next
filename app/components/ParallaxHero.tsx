'use client';
import type { ReactNode } from 'react';

import { Parallax } from 'react-scroll-parallax';
import { Providers } from '../providers';

type ParallaxHeroProps = {
  presentationsText: {
    text: ReactNode;
    headerImage: string;
  };
};

export default function ParallaxHero({ presentationsText }: ParallaxHeroProps) {
  const { text } = presentationsText;


  return (
    <Providers>

    <div className="min-h-screen">
      <Parallax
        scale={[3.5, 0.5]}
        speed={-50}
      >
        <div className="bg-center min-h-[100vh] md:min-h-screen w-full bg-no-repeat bg-[url(/Evgeni_Leonov_foto.jpg)] bg-[length:100%]" />
      </Parallax>
      <Parallax speed={60}>
        <section className="flex justify-center w-full bg-test-500">
          <article className="text-white text-center max-w-5xl md:text-3xl p-8">{text}</article>
        </section>
      </Parallax>
    </div>
    </Providers>

  );
}
