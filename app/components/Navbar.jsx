"use client";
import Link from "next/link"
import { ScrollContext } from "./ScrollProvider";
import { useContext, useState } from "react";
import { animated } from "@react-spring/web";
import { Overlay} from "./Overlay"

export default function Navbar({ headerMenuItems }) {

  const { scrollYProgress } = useContext(ScrollContext);
  const [isOpen, setIsOpen] = useState(false);
  const openOrCloseOverlay = (bool) => {
    setIsOpen(bool);
  }

  const views = [
    { name: "Hej", link: "/" },
    { name: "Aktuellt", link: "/aktuellt" },
    { name: "Galleri", link: "/galleri" },
    { name: "CV", link: "/cv" },
    { name: "Test", link: "/test" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 min-h-[8rem] px-[2rem] md:px-0">

        { isOpen && <Overlay views={views} close={() => openOrCloseOverlay(false)} />}
      <nav className="w-full mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center h-[6rem] z-10 flex text-black bg-transparent text-white relative">
        <ul className="flex h-2/3 w-full md:w-1/3 justify-between md:justify-evenly md:self-end md:items-end
">
          {headerMenuItems.map((item, index) => (
            <li key={index} className="h-[60%] md:h-[80%]">
              <a href={item.link}>
                <img src={item.image} alt="" className="h-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex w-full md:w-1/3 justify-between md: justify-center items-center h-full">
          <animated.h1 className="text-4xl whitespace-nowrap flex font-bold md:text-8xl leading-[1.5] w-full md:w-1/3 md:self-start justify-between md:justify-center py-[1rem] md:p-0" style={{ opacity: scrollYProgress.to(v => 1 - v) }}>Evgeni Leonov
          </animated.h1>
          <div className="h-full flex py-[1rem] flex-col justify-center" onClick={() => openOrCloseOverlay(true)}>
            <span className="md:hidden right-0 bg-white h-1 w-6 rounded-full mb-1"></span>
            <span className="md:hidden right-0 bg-white h-1 w-6 rounded-full mt-1"></span>
          </div>
        </div>

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

