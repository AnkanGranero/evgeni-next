import { renderRichText } from "@/lib/contentful/rich-text";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getLatest} from "@/lib/contentful/latest/api";

export default async function LatestPage() {
  const latest = await getLatest();

  if(!latest) return notFound();
  return (
    <main className=" content-grid">
      <ul className="popout mt-45 lg:mt-50 xl:mt-60 flex flex-col gap-20">
        {latest.length &&
          latest.map((item) => {
            return (
              <li key={item.id} className=" md:text-2xl 2xl:text-3xl text-white">
                {
                item?.image?.url?      
                <Image
                  src={`https:${item.image?.url}`}
                  height={item.image.dimensions?.height}
                  width={item.image.dimensions?.width}
                  alt={item.image.description?? ""}
                  ></Image>: ""
                }
                  {renderRichText(item.body)}
              </li>
            );
          })}
      </ul>
    </main>
  );
}
