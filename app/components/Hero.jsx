

"use client";
import { animated, useSpring } from '@react-spring/web';
import { useRef } from "react";
import { useContext } from "react";
import { ScrollContext } from "./ScrollProvider";

export default function Hero({ text }) {
  const containerRef = useRef();
  
  const { scrollYProgress } = useContext(ScrollContext);

  const styles = useSpring({

    config: {
      tension: 120,
      friction: 35,
    },
  })
  return (
    <animated.div ref={containerRef}>

          <animated.div style={{opacity: scrollYProgress.to(v => 1 - v),backgroundSize: scrollYProgress.to(v=> `${120  - (v*10)}%`), ...styles}} className='bg-center min-h-screen w-full bg-no-repeat bg-[url(/Evgeni_Leonov_foto.jpg)]' />

          <section className="flex justify-center">
            <div className="text-white text-center max-w-5xl" >
              <animated.div style={{opacity: scrollYProgress.to(v => 1 + v), transform: scrollYProgress.to(v => `translateY(-${v * 250}px)`)}} className='md:text-3xl p-8'>{text}</animated.div>
            </div>
          </section>
  



    </animated.div>
  );
}