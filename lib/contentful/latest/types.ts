import { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";
import { CFAsset, CFImageFile } from "../types";
import type { Document as CfDocument } from "@contentful/rich-text-types";

export type NewsItemFields = {
  title: string;
  image: CFImageFile;
  body: CfDocument;
};

type NewsFields = {
  title: EntryFields.Symbol;     
  body: EntryFields.RichText;   
  image?: Asset | null;          
                 
};

/* export type NewsEntry = {
  sys: { id: string };
  fields: NewsFields;
}; */

export type NewsSkeleton = EntrySkeletonType<NewsFields, 'newsItem'>;
export type NewsEntry = Entry<NewsSkeleton>

export type TransformedNewsItem = {
  id: string;
  image: CFImageFile;
  body: CfDocument;
};


