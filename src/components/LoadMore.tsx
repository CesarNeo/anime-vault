'use client'

import { getAnimes } from '@/app/action'
import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type AnimeCard = ReactNode

function LoadMore() {
  const { ref, inView } = useInView()
  const [animes, setAnimes] = useState<AnimeCard[]>([])

  useEffect(() => {
    if (inView) {
      ;(async () => {
        const data = await getAnimes(2)

        setAnimes((prev) => [...prev, ...data])
      })()
    }
  }, [inView])

  return (
    <>
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes}
      </section>

      <section className="flex w-full items-center justify-center">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  )
}

export default LoadMore
