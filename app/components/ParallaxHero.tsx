'use client';
import type { ReactNode } from 'react';

import { useRef } from 'react';
import { useContext } from 'react';
import { ScrollContext } from './ScrollProvider';
import useIsMobile from '../hooks/useIsMobile';
import { Parallax } from 'react-scroll-parallax';

type ParallaxHeroProps = {
  presentationsText: {
    text: ReactNode;
    headerImage: string;
  };
};

export default function ParallaxHero({ presentationsText }: ParallaxHeroProps) {
  const { text } = presentationsText;
  /*   const containerRef = useRef<HTMLDivElement | null>(null); */
  const isMobile = useIsMobile();
  /*   const backgroundStartSize = isMobile ? 250 : 120; */

  return (
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
  );
}
