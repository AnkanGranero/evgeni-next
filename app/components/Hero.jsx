'use client';

import { animated, useSpring } from '@react-spring/web';
import { useRef } from 'react';
import { useContext } from 'react';
import { ScrollContext } from './ScrollProvider';
import useIsMobile from '../hooks/useIsMobile';

export default function ParallaxHero() {
 const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useContext(ScrollContext);
  const backgroundStartSize = isMobile ? 250 : 120;

  const styles = useSpring({
    config: {
      tension: 120,
      friction: 35,
    },
  });
  return (
    <animated.div ref={containerRef} className="min-h-screen">
      <animated.div
        style={{
          backgroundSize: scrollYProgress.to((v) => `${backgroundStartSize - v * 10}%`),
          ...styles,
        }}
        className="bg-center min-h-[100vh] md:min-h-screen w-full bg-no-repeat bg-[url(/Evgeni_Leonov_foto.jpg)]"
      />

      <animated.section
        style={{
          opacity: scrollYProgress.to((v) => 1 + v),
          transform: scrollYProgress.to((v) => `translateY(-${v * 250}px)`),
        }}
        className="flex justify-center w-full bg-test-500"
      >
        <article className="text-white text-center max-w-5xl md:text-3xl p-8">{text}</article>
      </animated.section>
    </animated.div>
  );
}
