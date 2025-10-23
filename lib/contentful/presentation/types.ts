import { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypePresentationFields {
  presentationstext?: EntryFieldTypes.RichText;
  headerImage?: EntryFieldTypes.AssetLink;
}

export type TypePresentationSkeleton = EntrySkeletonType<TypePresentationFields, 'presentation'>;
export type TypePresentation<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePresentationSkeleton, Modifiers, Locales>;
