'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Image, { StaticImageData } from 'next/image'



type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  slide : (string | StaticImageData)[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, slide } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slide.map((item, index ) => (
            <div className="transform translate-z-0 flex-none w-full min-w-0 px-4" key={index}>
              <div className=" h-96 font-semibold flex items-center justify-center select-none">
                <Image src={item} alt="as " className="object-cover w-full"/> 
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[0.8rem]">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex  space-x-2">
            {slide.map((image , index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                image={image }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel


