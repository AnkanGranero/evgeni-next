import { MediaKey } from "@/app/media/[selectedMedia]/types";
import {client} from "@/lib/contentful/client"

export async function fetchMedia(mediaKey : MediaKey) {
  const response = await client.getEntries({
    content_type: "mediaItem",
    'fields.type[in]': mediaKey 
  });
  
  return response.items;
}