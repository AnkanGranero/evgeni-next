"use client";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from "react";
import Footer from "./Footer"

export default function Hero({ text }) {
  const parallax = useRef();
  return (
    <Parallax pages={1.3} ref={parallax} config={{ tension: 130, friction: 25, clamp: true }}>
      {<ParallaxLayer offset={0} factor={1.3} speed={-0.2}  style={{ backgroundImage: 'url(/Evgeni_Leonov_foto.jpg)', backgroundSize: "130%"}} className='bg-center'>

      </ParallaxLayer>}


      <ParallaxLayer factor={1} offset={0.9} speed={1.5} >
        <section className="flex justify-center">
          <div className="text-white text-center max-w-5xl" >
     
            <p className='text-3xl p-8'>{text}</p>
          </div>
        </section>
      </ParallaxLayer>

      <Footer />


    </Parallax>
  );
}
