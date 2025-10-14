"use client";
import { ReactNode, useEffect, useRef } from "react";
import type { LenisRef } from 'lenis/react';
import { useTransform, useScroll, motion, useSpring, cancelFrame, frame } from "framer-motion";
import {  ReactLenis,  } from "lenis/react";

export default function ParallaxText({
  text,
  background,
}: {
  text: ReactNode;
  background: string;
}) {

  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])


  const textContainer = useRef(null);
  const { scrollYProgress } = useScroll({ target: textContainer });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const ySpringText = useSpring(yText, {
    stiffness: 105,
    damping: 20,
  });
  const yBG = useTransform(scrollYProgress, [0, 1], [0, 600]);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
       <ReactLenis root options={{ autoRaf: false,  lerp: 0.1,
  wheelMultiplier: 0.6, }} ref={lenisRef} />
      <section
        className="h-full relative isolate flex justify-center overflow-hidden"
        ref={textContainer}
      >
        <motion.div
          className={`absolute -z-10 inset-0 bg-[position:center_7%] lg:bg-top bg-[length:200%] 2xl:bg-[length:110%] bg-no-repeat`}
          style={{ y: yBG, opacity, backgroundImage: `url(${background})` }}
        />
        <motion.article
          className="relative z-10 text-white text-center max-w-5xl md:text-3xl p-8 w-full pt-[30rem] md:pt-[50rem] lg:pt-[70rem]"
          style={{ y: ySpringText }}
        >
          {text}
        </motion.article>
      </section>
    </>
  );
}
