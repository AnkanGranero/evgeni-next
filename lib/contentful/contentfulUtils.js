
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchEntries } from "./contentful"

export async function getPresentationText() {

    const response = await fetchEntries("presentation")

    return mapPresentationText(response);

}
export function mapPresentationText(entries) {
    const first = entries[0];
    const rich = first?.fields?.presentationstext;

    const raw = first?.fields?.headerImage?.fields?.file?.url;
    const headerImage = raw ? `http:${raw}?w=1600&fm=webp&q=80` : "";

    return {
        text: renderRichText(rich),
        headerImage,
    };
}

export function renderRichText(richText) {
    if (!richText) return null;

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => (
                <p className="my-2" > {children} </p>
            ),
            [BLOCKS.HEADING_2]: (_node, children) => (
                <h2 className="text-xl font-bold" > {children} </h2>
            ),
            [INLINES.HYPERLINK]: (node, children) => (
                <a href={node.data.uri} className="text-blue-500 hover:underline" >
                    {children}
                </a>
            ),
        },
    };
    return documentToReactComponents(richText, options);
}


export async function getHeaderMenuItems() {
    const response = await fetchEntries("navLink");

    const menuItems = response.map((item) => {
        const rawUrl = item.fields.image?.fields?.file?.url ?? ""

        return {
            link: item.fields.link ?? "",
            image: rawUrl ? `https:${rawUrl}w=64&h=64&fit=thumb&fm=webp&q=80` : ""
        }
    })

    return menuItems;
}

function toHttps(url) {
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

export async function getGalleryImages() {
    const response = await fetchEntries("galleryImage");

  const images = response
    .map((item) => item.fields?.image?.fields?.file?.url ? {
      id: item.sys.id,
      alt: item.fields?.image?.fields?.description || item.fields?.image?.fields?.title || "",
      base: toHttps(item.fields.image.fields.file.url),
      w: item.fields?.image?.fields?.file?.details?.image?.width || 1000,
      h: item.fields?.image?.fields?.file?.details?.image?.height || 1000,
    } : null)
    .filter(Boolean)
    .map(({ id, alt, base, w, h }) => ({
      id,
      alt,
      w,
      h,
      thumbUrl: `${base}?w=400&h=400&fit=thumb&fm=webp&q=70`,
      fullUrl:  `${base}?w=1600&fm=webp&q=80`,
      blurUrl:  `${base}?w=20&q=20&fm=webp`,
    }));

  return images;
}

