import type { ReactNode } from "react";
import {
    BLOCKS, INLINES,
    type Document,
    type Inline,
    type Block
} from "@contentful/rich-text-types";

import {
    documentToReactComponents,
    type Options,
} from "@contentful/rich-text-react-renderer";
import { fetchEntries } from "./contentful";

export function renderRichText(richText?: Document): ReactNode {
    if (!richText) return null;

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => (
                <p className="my-2" > {children} </p>
            ),
            [BLOCKS.HEADING_2]: (_node: Block | Inline, children: ReactNode) => (
                <h2 className="text-xl font-bold" > {children} </h2>
            ),
            [INLINES.HYPERLINK]: (node:any, children: ReactNode) => (
                <a href={node.data.uri} className="text-blue-500 hover:underline" >
                    {children}
                </a>
            ),
        },
    };
    return documentToReactComponents(richText, options);
}

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
