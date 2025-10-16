import { CFAsset } from "../types";

export type PresentationFields = {
  presentationstext?: Document;
  headerImage?: CFAsset;
};

export type PresentationEntry = {
  sys: { id: string };
  fields: PresentationFields;
};