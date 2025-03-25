import { getHeaderMenuItems } from "../../lib/contentfulUtils";

export default async function CHeader() {

    const headerMenuItems = await getHeaderMenuItems();

    return (
        <header className="border-b border-gray-200 ">
        <nav className="w-full mx-auto flex justify-center items-center flex-col h-32 h-[10rem] flex">
          <div className="px-0 h-3/5 flex items-center justify-center bg-[#ead74c] w-full">
          <h1 className="font-bold text-6xl leading-[1.5] text-stone-950">Evgeni Leonov</h1>
          </div>
            <ul className="flex h-2/5 w-full bg-green-300 p-3">
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

