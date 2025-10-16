import { renderRichText } from "@/lib/contentful/rich-text";

import { notFound } from "next/navigation";
import Image from "next/image";
import { TransformedNewsItem } from "@/lib/contentful/latest/types";
import { getLatest } from "@/lib/contentful/latest/api";

export default async function LatestPage() {
  const latest = await getLatest();

  if (!latest) return notFound;

  return (
    <main className="bg-white content-grid">
      <ul className="">
        {latest.length &&
          latest.map((item: TransformedNewsItem) => {
            return (
              <li key={item.id}>
                {renderRichText(item.body)}
                <Image
                  src={`https:${item?.image?.fields?.file?.url}`}
                  height={item?.image?.fields?.file?.details?.image?.height}
                  width={item?.image?.fields?.file?.details?.image?.width}
                  alt={item?.image?.fields?.title ?? ""}
                ></Image>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
