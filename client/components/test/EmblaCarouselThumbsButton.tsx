import React from 'react'
import { Button } from '../ui/button'
import Image, { StaticImageData } from 'next/image'

type PropType = {
  selected: boolean
  image: string | StaticImageData
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, image , onClick } = props

  return (
    <div
      className={'flex-none w-[22%]  '.concat(
        selected ? ' shadow-2xl border-2 border-blue-500 ' : ''
      )}
    >
      <Button
        onClick={onClick}
        className=" h-24 bg-transparent cursor-pointer border-0 p-0 m-0 flex items-center justify-center"
      >
        <Image  src={image} alt="as " className="object-cover h-full"/> 
      </Button>
    </div>
  )
}
