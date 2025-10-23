import { fetchMedia } from "@/lib/contentful/media/api";
import { MediaKey, mediaKeys } from "./types";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MediaPage({
  params,
}: {
  params: Promise<{ selectedMedia?: MediaKey }>;
}) {
  const { selectedMedia = "Actor" } = await params;
  const response = await fetchMedia(selectedMedia);
  const mediaClips = response;

  if (!mediaClips) return notFound();
  return (
    <main className="content-grid pb-16">
      <header className="mt-40 lg:mt-60 feature">
        <ul className="flex w-full justify-center gap-15 md:text-3xl lg:text-5xl">
          {mediaKeys.map((mediaKey: MediaKey) => (
            <li
              key={mediaKey}
              className={`${
                mediaKey === selectedMedia ? "underline" : ""
              } text-white`}
            >
              <Link href={`${mediaKey}`}>{mediaKey}</Link>
            </li>
          ))}
        </ul>
      </header>
      <ul className="popout mt-10 lg:mt-20 flex w-full justify-center gap-15 flex-col ">
        {mediaClips.map((item) => {
          return (
            <li className="text-white w-full" key={item.sys.id}>
              <iframe
                className="w-full aspect-[16/9] border-0"
                src={item.fields.link}
                allowFullScreen
              ></iframe>

              <h3 className="hidden mt-8 text-2xl text-center">{item.fields.name}</h3>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
