"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { useRef} from "react";

export default function TestScrollPage() {
  const parallax = useRef();
  return(
    <Parallax pages={2} ref={parallax}>
    <main className="min-h-[300vh] relative overflow-x-hidden overflow-y-hidden">
      {/* Parallax bakgrund */}
      <ParallaxLayer speed={-0.4} className="absolute inset-0 -z-10">
        <div className="h-[150vh] bg-[url('/Evgeni_Leonov_foto.jpg')] bg-cover bg-center" />
      </ParallaxLayer>

      {/* Tom yta i toppen */}
      <div className="h-[100vh]" />

      {/* Enkel text */}
      <ParallaxLayer speed={0.2} offset={0.8}>
      <section className="flex justify-center">
        <div className="text-white text-center max-w-xl">
          <h1 className="text-8xl font-bold mb-4">Hej</h1>
          <p>
            Testing testing
          </p>
        </div>
      </section>
      </ParallaxLayer>

    </main>
  </Parallax>)

    
}