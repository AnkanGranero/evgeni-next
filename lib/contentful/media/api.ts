import { MediaKey } from "@/app/media/[selectedMedia]/types";
import {client} from "@/lib/contentful/client"
import { TypeMediaItem, TypeMediaItemSkeleton } from "../types";

export async function fetchMedia(mediaKey : MediaKey): Promise<TypeMediaItem<never,"sv-SE">[]>{
  const response = await client.getEntries<TypeMediaItemSkeleton , "sv-SE">({
    content_type: "mediaItem",
    'fields.type': mediaKey,
    include:10
  });
  
  return response.items;
}

export async function fetchMedia2(mediaKey : MediaKey): Promise<TypeMediaItem<never,"sv-SE">[]>{
  const response = await client.getEntries<TypeMediaItemSkeleton>({
    content_type: "mediaItem",
    'fields.type[in]': mediaKey 
  });
  
  return response.items;
}