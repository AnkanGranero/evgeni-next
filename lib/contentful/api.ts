import { Entry, EntrySkeletonType } from "contentful";
import { client } from "./client";

export async function fetchEntries<T extends EntrySkeletonType>(contentType: T["contentTypeId"]): Promise<Entry<T>[]> {
  const response = await client.getEntries<T>({ content_type: contentType });
  return response.items;
}




