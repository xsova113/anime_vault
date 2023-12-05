// "use server";

import AnimeCard from "@/components/AnimeCard";
import { animeType } from "./types/animeType";

export const fetchAnime = async (page: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();

  return data.map((item: typeof animeType, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
