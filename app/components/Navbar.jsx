"use client";
import Link from "next/link"
import { ScrollContext } from "./ScrollProvider";
import { useContext } from "react";
import { animated } from "@react-spring/web";

export default function Navbar({headerMenuItems}) {

  const { scrollYProgress } = useContext(ScrollContext);

  const views = [
    { name: "Hej", link: "/" },
    { name: "Aktuellt", link: "/aktuellt" },
    { name: "Galleri", link: "/galleri" },
    { name: "CV", link: "/cv" },
    { name: "Test", link: "/test" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 min-h-[8rem] px-[2rem] md:px-0">
      <nav className="w-full mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center h-[6rem] z-10 flex text-black bg-transparent text-white relative">
        <ul className="flex h-2/3 w-full md:w-1/3 justify-between md:justify-normal md:self-end 
">
          {headerMenuItems.map((item, index) => (
            <li key={index} className="h-[60%] md:h-full md:ml-10">
              <a href={item.link}>
                <img src={item.image} alt="" className="h-full" />
              </a>
            </li>
          ))}
        </ul>
        <animated.h1 className="text-4xl whitespace-nowrap flex font-bold md:text-8xl leading-[1.5] w-full md:w-1/3 md:self-start justify-between md:justify-center py-[1rem] md:p-0" style={{ opacity: scrollYProgress.to(v => 1 - v)}}>Evgeni Leonov <span className="md:hidden">X</span></animated.h1>
        
        <ul className="hidden md:flex w-1/3 justify-evenly self-end">
          {views.map(view => (
            <Link key={view.name} href={view.link} className="text-2xl">
              {view.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>)
}

