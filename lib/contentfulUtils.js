import { Entry } from "contentful";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchEntries } from "./contentful"

export async function getPresentationText() {

  const response = await fetchEntries("presentation")

  return mapPresentationText(response);

}
export function mapPresentationText(entry) {

  return {
    text: renderRichText(entry[0].fields?.presentationstext),
    headerImage: entry[0].fields?.headerImage?.fields?.file.url ?? "",
  };
}

export function renderRichText(richText) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-2">{children}</p>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-xl font-bold">{children}</h2>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-blue-500 hover:underline">
          {children}
        </a>
      ),
    },
  };
  return documentToReactComponents(richText, options);
}

export async function getHeaderMenuItems() {
  const response = await fetchEntries("headerMenuLink");

  const menuItems = response.map((item) => {

    return {
      link: item.fields.link?.content?.[0]?.content?.[0]?.value ?? "",
      image: item.fields.image?.fields?.file?.url ?? ""
    }
  })

  return menuItems;
}

