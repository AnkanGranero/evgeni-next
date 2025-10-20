import { Entry, EntrySkeletonType } from "contentful";
import { client } from "./client";

export async function fetchEntries<T extends EntrySkeletonType>(
  contentType: T["contentTypeId"]
): Promise<Entry<T>[]> {
  const response = await client.getEntries<T>({
    content_type: contentType,

  });
  return response.items;
}

export async function fetchImageAssets<T extends EntrySkeletonType>(contentType: T["contentTypeId"]) {
  const response = await client.getAssets(contentType);

  return response.items.map((item) => {
    const url = item.fields.file?.url;
    const description = item.fields.description;
    const dimensions = item.fields.file?.details.image;
    const id = item.sys.id;
    const title = item.fields.title
    const image = {url,description, dimensions, id, title}
    return image;
  });
}
