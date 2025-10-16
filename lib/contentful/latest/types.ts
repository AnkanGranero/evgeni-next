import { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";
import { CFAsset, CFImageFile } from "../types";
import type { Document as CfDocument } from "@contentful/rich-text-types";


type NewsFields = {
  title: EntryFields.Symbol;     
  body: EntryFields.RichText;   
  image?: CFImageFile;
};


export type NewsSkeleton = EntrySkeletonType<NewsFields, 'newsItem'>;
export type NewsEntry = Entry<NewsSkeleton>

export type TransformedNewsItem = {
  id: string;
  image?: CFImageFile;
  body: CfDocument;
};


