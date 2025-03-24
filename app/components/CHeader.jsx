import { getHeaderMenuItems } from "../../lib/contentfulUtils";

export default async function CHeader() {

    const headerMenuItems = await getHeaderMenuItems();

    return (
        <header className="border-b border-gray-200 h-[8rem] flex">
        <nav className="w-full mx-auto flex justify-center items-center flex-col h-32">
          <h1 className="font-bold grow-2 text-6xl">Evgeni Leonov</h1>
            <ul className="flex h-1/2 w-full bg-green-300 p-3">
              {headerMenuItems.map((item, index) => (
                <li key={index} className="h-full ml-4">
                  <a href={item.link}>
                    <img src={item.image} alt="" className="h-full" />
                  </a>
                </li>
              ))}
            </ul>
        </nav>
        </header>)
}

