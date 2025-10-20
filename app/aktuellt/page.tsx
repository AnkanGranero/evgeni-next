import { renderRichText } from "@/lib/contentful/rich-text";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getLatest, getLatest2 } from "@/lib/contentful/latest/api";
import { fetchAssets } from "@/lib/contentful/api";

export default async function LatestPage() {
  const latest = await getLatest();
  const latest2 = await getLatest2();
/*   const assets = await fetchAssets() */
  console.log("getLatest2", latest2);
  
  
/*   console.log("assets", assets); */
  
  if(!latest) return notFound();
  return (
    <main className=" content-grid">
      <ul className="popout mt-45 lg:mt-50 xl:mt-60 flex flex-col gap-20">
        {latest.length &&
        //ask about help in fetch so I don't have to set any here
          latest.map((item:any) => {
            return (
              <li key={item.id} className=" md:text-2xl 2xl:text-3xl text-white">
                <Image
                  src={`https:${item?.image?.fields?.file?.url}`}
                  height={item?.image?.fields?.file?.details?.image?.height}
                  width={item?.image?.fields?.file?.details?.image?.width}
                  alt={item?.image?.fields?.title ?? ""}
                  ></Image>
                  {renderRichText(item.body)}
              </li>
            );
          })}
      </ul>
    </main>
  );
}
