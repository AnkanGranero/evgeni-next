import { toHttps } from "../url";
import type { GalleryImage, RawAsset } from "./types";


type VariantOpts = {
  thumb?: { w?: number; h?: number; fit?: "thumb" | "crop" | "pad" | "scale"; q?: number; fm?: "webp" | "jpg" | "avif" };
  full?:  { w?: number; q?: number; fm?: "webp" | "jpg" | "avif" };
  blur?:  { w?: number; q?: number; fm?: "webp" | "jpg" | "avif" };
};

export function buildImageVariants(asset: RawAsset, opts: VariantOpts = {}): GalleryImage {
  const file = asset.fields?.file;
  const base = toHttps(file?.url);
  const w = file?.details?.image?.width ?? 1000;
  const h = file?.details?.image?.height ?? 1000;
  const alt = asset.fields?.description ?? asset.fields?.title ?? "";

  const thumb = { w: 400, h: 400, fit: "thumb", q: 40, fm: "webp", ...(opts.thumb || {}) };
  const full  = { w: 1600, q: 90, fm: "webp", ...(opts.full || {}) };
  const blur  = { w: 20, q: 20, fm: "webp", ...(opts.blur || {}) };

  return {
    id: asset.sys.id,
    alt,
    w,
    h,
    thumbUrl: `${base}?w=${thumb.w}&h=${thumb.h}&fit=${thumb.fit}&fm=${thumb.fm}&q=${thumb.q}`,
    fullUrl:  `${base}?w=${full.w}&fm=${full.fm}&q=${full.q}`,
    blurUrl:  `${base}?w=${blur.w}&fm=${blur.fm}&q=${blur.q}`,
  };
}