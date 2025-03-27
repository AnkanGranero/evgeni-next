"use client"

import { ParallaxProvider } from "react-scroll-parallax"

export default function ParalaxLayout({children}) {
    return <ParallaxProvider>{children}</ParallaxProvider>;
}