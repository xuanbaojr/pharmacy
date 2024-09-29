'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { pharmacy } from "./testRecomment"
import CardProduct from "@/components/card/product/CardProduct"
interface Props {
    slide : pharmacy[]
}

const SlideRe = ({slide} : Props) => {

    return (
        <>
        <div className=" w-full">
        <div className="flex-1 px-10 py-2  mx-2 flex justify-center items-center">
        <Carousel
            opts={{
                align: "start",
            }}
            className=" w-full rounded-xl "
        >
        <CarouselContent>
            {slide.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 ">
                <CardProduct pharmacy={item} />
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    
        </div>
        </div>
        </>
    )
}

export default SlideRe;