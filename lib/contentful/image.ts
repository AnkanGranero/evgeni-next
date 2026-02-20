import { toHttps } from './url';
import { ImageObject } from './types';
import { Asset } from 'contentful';

export function createImageObject(asset: Asset<never, 'sv-SE'>): ImageObject | undefined {
  if (!asset) return;
  const url = toHttps(asset.fields.file?.url);
  const description = asset.fields.description ?? asset.fields.title;
  const dimensions = asset.fields.file?.details.image;
  const id = asset.sys.id;
  const title = asset.fields.title;
  const thumb = { w: 800, h: 800, fit: 'thumb', q: 80, fm: 'webp' };
  const full = { w: 3200, q: 95, fm: 'webp' };
  const blur = { w: 20, q: 20, fm: 'webp' };
  const thumbUrl = `${url}?w=${thumb.w}&h=${thumb.h}&fit=${thumb.fit}&fm=${thumb.fm}&q=${thumb.q}`;
  const fullUrl = `${url}?w=${full.w}&fm=${full.fm}&q=${full.q}`;
  const blurUrl = `${url}?w=${blur.w}&fm=${blur.fm}&q=${blur.q}`;
  const image = { url, description, dimensions, id, title, thumbUrl, fullUrl, blurUrl };
  return image;
}