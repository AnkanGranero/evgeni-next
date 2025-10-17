import { fetchEntries } from "../api";

import { mapPresentationText } from "../rich-text";


export async function getPresentationText() {
  const response = await fetchEntries("presentation");

  return mapPresentationText(response);
}