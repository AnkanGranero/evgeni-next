import { fetchEntries, fetchImageAssets } from '../api';
import { TypeNewsItemSkeleton } from './types';
import { type Document as CfDocument,
} from '@contentful/rich-text-types';

export async function getLatest() {
  const entriesResponse = await fetchEntries<TypeNewsItemSkeleton>('newsItem');
  const assetImages = await fetchImageAssets<TypeNewsItemSkeleton>('newsItem');
  return entriesResponse.map((item) => {
    const image = assetImages.find(asset => asset.id === item.sys.id)
    const id = item.sys.id;
    const body = item.fields.body as CfDocument;

    return { image, id, body };
  });
}
