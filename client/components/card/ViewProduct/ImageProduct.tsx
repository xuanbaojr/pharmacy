import Image, { StaticImageData } from "next/image"
import anh from "@/public/assets/image/logo.png"

import { ListArticle } from '@/components/card/Article/dataArticle'
import EmblaCarousel from '@/components/test/test'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = {}




interface Props {
    image : string | StaticImageData 
}

const ImageProduct = ({image} : Props) => {
    const ListImage : (string | StaticImageData)[] = [
        image, image, image, image ,image, image 
    ]
    const SLIDES = Array.from(Array(ListImage.length).keys())

    return (
        <>
        <div className="w-full flex gap-4 ">
            <EmblaCarousel slide={ListImage} slides={SLIDES} options={OPTIONS} />
        </div>
        </>
    )
}

export default ImageProduct
