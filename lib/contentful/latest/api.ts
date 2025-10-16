import { fetchEntries } from "../api";
import { NewsEntry, NewsSkeleton, TransformedNewsItem } from "./types";


export async function getLatest2() {
  const response = await fetchEntries("newsItem");
  return response

}

export async function getLatest(): Promise<TransformedNewsItem[]> {
  const response = await fetchEntries<NewsSkeleton>("newsItem");
  return response.map((item: NewsEntry) => {
  
    return { id: item.sys.id, image: item.fields.image, body: item.fields.body  };
  });

}