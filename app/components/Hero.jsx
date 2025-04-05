

"use client";
import { animated, useScroll, useSpring } from '@react-spring/web';
import { useRef } from "react";
import Footer from "./Footer"

export default function Hero({ text }) {
  const containerRef = useRef();


  
  const { scrollYProgress } = useScroll({ container: containerRef,
    onChange: ( {value }) => {
      return value;
    }
  });

  const styles = useSpring({

    config: {
      tension: 120,
      friction: 35,
    },
  })
  return (
    <animated.div ref={containerRef}
      className="h-screen overflow-y-auto">

          <animated.div style={{opacity: scrollYProgress.to(v => 1 - v),backgroundSize: scrollYProgress.to(v=> `${120  - (v*10)}%`), ...styles}} className='bg-center h-full w-full bg-no-repeat bg-[url(/Evgeni_Leonov_foto.jpg)]' />

          <section className="flex justify-center">
            <div className="text-white text-center max-w-5xl" >
              <animated.div style={{opacity: scrollYProgress.to(v => 0 + v), transform: scrollYProgress.to(v => `translateY(-${v * 300}px)`)}} className='text-3xl p-8'>{text}</animated.div>
            </div>
          </section>
  

        <Footer />


    </animated.div>
  );
}