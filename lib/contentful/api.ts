import { EntrySkeletonType } from "contentful";
import { client } from "./client";

export async function fetchEntries<T extends EntrySkeletonType>(
  contentType: T["contentTypeId"]
) {
  const response = await client.getEntries<T>({
    content_type: contentType,
    include:10, 

  });
return response;
}

export async function fetchAsset(assetId: string) {
  const response = await client.getAsset(assetId);

  return response;
}
