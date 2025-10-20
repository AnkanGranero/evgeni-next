import { Entry, EntrySkeletonType } from "contentful";
import { client } from "./client";
/*  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN; */

export async function fetchEntries<T extends EntrySkeletonType>(
  contentType: T["contentTypeId"]
): Promise<Entry<T>[]> {
  const response = await client.getEntries<T>({
    content_type: contentType,

  });
  return response.items;
}

export async function fetchEntries2(contentType) {
  const response = await client.getEntries({
    limit: 4,
    content_type: contentType,
/*     select: ["sys.id","fields.image"] */
/*     include:3 */
  /*    select: ["fields"] */
  });
  return response.items;
}
/* export async function fetchEntriesByUrl(contentType) {
  const response = await fetch(`/spaces/${space}/environments/master/entries/?access_token=${accessToken}&content_type=${contentType}&select=sys.id,fields.body`
)
return response.items;
} */
//to be implemented
export async function fetchAssets() {
  const response = await client.getAssets("newsItem");
  return response.items;
}
