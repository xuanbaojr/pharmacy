'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { image } from "./PrImage"
import Image from "next/image"

interface Props {
    pr : image[]
}


const PrSlide = ({pr} : Props) => {

    return (
        <>
        <Carousel
            opts={{
                align: "start",
                loop : true,
            }}
            plugins={[
                // Autoplay({
                //   delay: 10000,
                // }),
              ]}
            className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 "
        >
        <CarouselContent className="rounded-2xl h-full">
            {pr.map((item, index) => (
            <CarouselItem key={index} className=" h-full md:basis-1/1 lg:basis-1/1">
                <div className="w-full overflow-hidden">
                    <div className="flex items-center justify-center h-52 w-full overflow-hidden rounded-2xl">
                        <Image src={item.image} alt="anh" className=" object-cover w-full rounded-2xl" />
                    </div>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        </Carousel>
        </>
    )
}

export default PrSlide;