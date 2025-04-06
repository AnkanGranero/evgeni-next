"use client"
import React, { createContext, useRef } from "react"
import { useScroll } from "@react-spring/web"

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {

    const scrollRef = useRef();
    const { scrollYProgress } = useScroll({ container: scrollRef })


    return (
        <div ref={scrollRef} className="h-screen overflow-y-auto ">
            <ScrollContext.Provider value={{ scrollYProgress }}>
                {children}
            </ScrollContext.Provider>
        </div>
    )
};