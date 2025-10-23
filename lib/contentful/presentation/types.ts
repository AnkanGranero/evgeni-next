import { CFImageFile } from "../types";
import type { Document as CfDocument } from '@contentful/rich-text-types';

export type PresentationFields = {
  presentationstext?: CfDocument;
  headerImage?: CFImageFile;
};

export type PresentationEntry = {
  sys: { id: string };
  fields: PresentationFields;
};