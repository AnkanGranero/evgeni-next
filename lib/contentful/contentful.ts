import { createClient, type Entry, type EntrySkeletonType } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchEntries<T extends EntrySkeletonType>(contentType: T["contentTypeId"]): Promise<Entry<T>[]> {
  const response = await client.getEntries<T>({ content_type: contentType });
  return response.items;
}