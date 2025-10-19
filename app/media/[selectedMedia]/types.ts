export const mediaKeys = ["Actor", "Director", "Music"] as const;

export type MediaKey = (typeof mediaKeys)[number];
