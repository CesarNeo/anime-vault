'use server'

import AnimeCard, { AnimeProp } from '@/components/AnimeCard'

export async function getAnimes(page = 1) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`,
  )
  const animes = (await response.json()) as AnimeProp[]

  return animes.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
}
