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
    <header className="fixed top-0 left-0 w-full z-50 min-h-[8rem]">
      <nav className="w-full mx-auto flex justify-evenly items-center h-[6rem] z-10 flex text-black bg-transparent text-white relative">
        <ul className="flex h-2/3 w-1/3 self-end">
          {headerMenuItems.map((item, index) => (
            <li key={index} className="h-full ml-10">
              <a href={item.link}>
                <img src={item.image} alt="" className="h-full" />
              </a>
            </li>
          ))}
        </ul>
        <animated.h1 className="font-bold text-8xl leading-[1.5] w-1/3 text-center self-start" style={{ opacity: scrollYProgress.to(v => 1 - v)}}>Evgeni Leonov</animated.h1>
        <ul className="w-1/3 flex justify-evenly self-end">
          {views.map(view => (
            <Link key={view.name} href={view.link} className="text-2xl">
              {view.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>)
}

