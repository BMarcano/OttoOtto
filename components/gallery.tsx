'use client'

import { useState } from "react"
import Image       from "next/image"
import Lightbox    from "yet-another-react-lightbox"
import Thumbnails  from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

type Props = {
  cover  : string
  images : string[]
  title  : string
}

export default function Gallery({ cover, images, title }: Props) {
  /* ---------- estado lightbox ---------- */
  const [open, setOpen] = useState(false)
  const all = [cover, ...images]            // 1er elemento será el cover
  const visible = all.slice(0, 5)           // máx. 5 miniaturas en la página

  return (
    <div className="container mx-auto px-4 mb-8">
      {/* GRID de 5 imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* principal */}
        <div className="relative h-[400px] md:h-[500px] w-full md:col-span-2">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover rounded-lg cursor-pointer"
            onClick={() => setOpen(true)}
            priority
          />
        </div>

        {/* 4 thumbnails */}
        <div className="grid grid-cols-2 gap-4">
          {visible.slice(1, 5).map((img, i) => {
            const isLast = i === 3 && all.length > 5
            return (
              <div
                key={i}
                className="relative h-40 w-full cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <Image
                  src={img}
                  alt={`${title} imagen ${i + 2}`}
                  fill
                  className="object-cover rounded-lg"
                />
                {isLast && (
                  <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center rounded-lg text-xl font-semibold">
                    +{all.length - 5}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={all.map(src => ({ src }))}
          plugins={[Thumbnails]}
        />
      )}
    </div>
  )
}
