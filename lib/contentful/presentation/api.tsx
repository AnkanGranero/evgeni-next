import { ReactNode } from 'react';
import { fetchEntries } from '../api';

import { TypePresentationSkeleton } from './types';
import { renderRichText } from '../rich-text';
import { Asset, EntryCollection } from 'contentful';
import { createImageObject } from '../image';
import { ImageObject } from '../types';

export function mapPresentationText(
  entries: EntryCollection<TypePresentationSkeleton, never, 'sv-SE'>,
): {
  text: ReactNode;
  headerImage: ImageObject;
} {
  const first = entries.items[0];
  const rich = first?.fields?.presentationstext;
  const assets = entries.includes?.Asset as Asset<never, 'sv-SE'>[];
  const headerImage = createImageObject(assets[0]) as ImageObject;

  return {
    text: renderRichText(rich),
    headerImage,
  };
}
export async function getPresentationText() {
  const response = await fetchEntries<TypePresentationSkeleton>('presentation');

  return mapPresentationText(response);
}
