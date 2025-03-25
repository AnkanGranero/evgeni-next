import { getHeaderMenuItems } from "../../lib/contentfulUtils";
import Link from "next/link"

export default async function CHeader() {

  const headerMenuItems = await getHeaderMenuItems();

  const views = [
    { name: "Hej", link: "/" },
    { name: "Aktuellt", link: "/aktuellt" },
    { name: "Galleri", link: "/galleri" },
    { name: "CV", link: "/cv" }
  ]

  return (
    <header className="">
      <nav className="w-full mx-auto flex justify-evenly items-center h-[6rem] flex text-black bg-transparent">
        <ul className="flex h-2/3  p-3 w-1/3">
          {headerMenuItems.map((item, index) => (
            <li key={index} className="h-full ml-10">
              <a href={item.link}>
                <img src={item.image} alt="" className="h-full" />
              </a>
            </li>
          ))}
        </ul>
        <h1 className="font-bold text-7xl leading-[1.5] w-1/3 text-center">Evgeni Leonov</h1>
        <ul className="w-1/3 flex justify-evenly">
          {views.map(view => (
            <Link key={view.name} href={view.link} className="text-2xl">
              {view.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>)
}

