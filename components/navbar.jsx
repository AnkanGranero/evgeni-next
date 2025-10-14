'use client';
import Link from 'next/link';
import SvgIcon from './icons/svg-icon';
import socialMediaIcons from './icons/social-media-icons';

export default function Navbar({ views }) {
  return (
    <header className="content-grid fixed top-0 left-0 w-full z-50 h-[9rem] md:h-[8rem] pb-[1rem] md:p-0 bg-orange">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="feature w-full mx-auto flex flex-col-reverse md:flex-row-reverse lg:flex-row justify-between xl:justify-between items-center h-full z-10 bg-transparent relative"
      >
        <ul className="flex h-[3rem] xl:h-3/5  w-full xl:w-1/4 justify-center md:justify-end lg:justify-start md:items-end list-none gap-3 2xl:gap-10 md:mt-3 lg:mt-0">
          {socialMediaIcons.map(({ href, maskPaths, maskId }, index) => (
            <li key={index} className="h-full md:h-[100%]">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${maskId.replace(/mask/i, '')}`}
              >
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

        <h1 className="text-matte-black whitespace-nowrap tracking-[-0.07em] flex font-bold text-[3.5rem] md:text-7xl  xl:text-8xl  w-full  xl:w-1/3 justify-center md:p-[0] font-evgeni">
          Evgeni Leonov
        </h1>

        <ul className="bg-orange lg:bg-transparent w-full fixed bottom-0 left-0 lg:relative p-3 lg:p-0 lg:pt-5 flex xl:w-1/4 justify-evenly">
          {views.map((view) => (
            <li key={view.name}>
              <Link href={view.link} className="text-2xl xl:text-3xl font-medium text-matte-black font-evgeni">
                {view.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
