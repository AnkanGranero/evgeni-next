import { Asset } from "contentful";
import { fetchEntries } from "../api";
import { TypeNewsItemSkeleton } from "./types";
import { type Document as CfDocument } from "@contentful/rich-text-types";


function createImageObject(asset: Asset<never,"sv-SE"> | undefined) {
  if (!asset) return;
  const url = asset.fields.file?.url;
  const description = asset.fields.description ?? "";
  const dimensions = asset.fields.file?.details.image;
  const id = asset.sys.id;
  const title = asset.fields.title;
  const original = asset;
  const image = { url, description, dimensions, id, title, original };
  return image;
}
export async function getLatest() {
  const entriesResponse = await fetchEntries<TypeNewsItemSkeleton>("newsItem");

  return entriesResponse.items.map((item) => {
    const assets = entriesResponse.includes?.Asset;
    const image = createImageObject(
      assets?.filter((asset) => asset?.sys.id === item.fields.image?.sys.id)[0]
    );
    const id = item.sys.id;
    const body = item.fields.body as CfDocument;
    const title = item.fields.title;

    return { image, id, body, title };
  });
}
