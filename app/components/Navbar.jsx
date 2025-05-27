"use client";
import Link from "next/link"
import { ScrollContext } from "./ScrollProvider";
import { useContext, useState } from "react";
import { animated } from "@react-spring/web";
import { Overlay } from "./Overlay"
import SvgIcon from "./icons/SvgIcon"
import socialMediaIcons from "./icons/socialMediaIcons"

export default function Navbar({ views }) {



  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[9rem] md:h-[8rem] p-[1rem] md:p-0 bg-orange">

      <nav className="w-full mx-auto flex flex-col md:flex-row justify-evenly items-center h-full z-10 text-black bg-transparent text-white relative">
        <ul className="flex md:h-3/5 h-[3rem] w-full md:w-1/3 justify-between md:justify-evenly md:items-end list-none">
          {socialMediaIcons.map(({ href, maskPaths, maskId }, index) => (
            <li key={index} className="h-full md:h-[100%]">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <SvgIcon
                  className="block max-w-full max-h-full"
                  fill="var(--color-matte-black)"
                  maskPaths={maskPaths}
                  maskId={maskId}
                />
              </a>
            </li>
          ))}
        </ul>

        <h1 className="text-matte-black whitespace-nowrap tracking-[-0.07em] flex font-bold leading-none text-[4.3rem] md:text-8xl leading-[1.5] w-full md:w-1/3 justify-between justify-center md:p-[0] font-evgeni">Evgeni Leonov
        </h1>

        <ul className="hidden md:flex w-1/3 justify-evenly">
          {views.map(view => (
            <Link key={view.name} href={view.link} className="text-2xl font-medium text-matte-black font-evgeni">
              {view.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>)
}

