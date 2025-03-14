import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries(contentType) {
  const response = await client.getEntries({ content_type: contentType });
  return response.items;
}