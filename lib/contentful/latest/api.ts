import { fetchEntries } from "../api";
import { client } from "../client";
import { TypeNewsItem,TypeNewsItemSkeleton} from "./types";

//this is not used right now, delete if not needed
export async function fetchNewsItems(): Promise<TypeNewsItem<never, 'sv-SE'>[]> {
  const response = await client.getEntries<TypeNewsItemSkeleton>({
    content_type: "newsItem",


  });
  return response.items
}

export async function getLatest() {
  const response = await fetchEntries<TypeNewsItemSkeleton>("newsItem");
  return response.map((item) => {
    const image = item.fields.image;
    const id = item.sys.id;
    const body = item.fields.body

    return { image, id, body}
  })
  


} 
