import type { Asset, ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

import { CFImageFile } from '../types';
import type { Document as CfDocument } from '@contentful/rich-text-types';

export type TransformedNewsItem = {
  id: string;
  image?: CFImageFile;
  body: CfDocument;
};

export interface TypeNewsItemFields {
    title?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
    image?: Asset;
    date?: EntryFieldTypes.Date;
    link?: EntryFieldTypes.Symbol;
    linkText?: EntryFieldTypes.Symbol;
}

export type TypeNewsItemSkeleton = EntrySkeletonType<TypeNewsItemFields, "newsItem">;
export type TypeNewsItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNewsItemSkeleton, Modifiers, Locales>;

export type manuallyCreatedNewsItemType = {
  sys: {
    id: string;
  }
  fields: {
    title: string;
    body: EntryFieldTypes.RichText;
    image: {
      fields: {
        file: {
          details: {
            image: {
              width: number;
              height: number;
            }
          }
          filename: string;
          url: string;
        }
      }
    }

  }
}