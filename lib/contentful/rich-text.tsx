import type { ReactNode } from 'react';
import {
  BLOCKS,
  INLINES,
  type Document as CfDocument,
  type Inline,
  type Block,
} from '@contentful/rich-text-types';


import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer';

function isHyperlink(node: Block | Inline): node is Inline & { data?: { uri?: string } } {
  return node.nodeType === INLINES.HYPERLINK;
}

export function renderRichText(richText?: CfDocument | undefined): ReactNode {
  if (!richText) return null;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => (
        <p className="my-2 mb-10"> {children} </p>
      ),
      [BLOCKS.HEADING_5]: (_node: Block | Inline, children: ReactNode) => (
        <h2 className="text-2xl font-bold"> {children} </h2>
      ),
      [INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
        const href = isHyperlink(node) ? node.data?.uri : undefined;
        return (
          <a href={href ?? '#'} className="text-blue-500 hover:underline">
            {children}
          </a>
        );
      },
    },
  } satisfies Options;
  return documentToReactComponents(richText, options);
}

