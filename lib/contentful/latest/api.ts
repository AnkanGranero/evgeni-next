import { Asset } from 'contentful';
import { fetchEntries } from '../api';
import { TypeNewsItemSkeleton } from './types';
import { type Document as CfDocument } from '@contentful/rich-text-types';
import { createImageObject } from '../image';



export async function getLatest() {
  const entriesResponse = await fetchEntries<TypeNewsItemSkeleton>('newsItem');

  return entriesResponse.items.map((item) => {
    const assets = entriesResponse.includes?.Asset as Asset<never, 'sv-SE'>[];
    const image = createImageObject(
      assets?.filter((asset) => asset?.sys.id === item.fields.image?.sys.id)[0],
    );
    const id = item.sys.id;
    const body = item.fields.body as CfDocument;
    const title = item.fields.title;

    return { image, id, body, title };
  });
}
