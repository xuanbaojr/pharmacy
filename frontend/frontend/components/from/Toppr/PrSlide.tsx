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
            className="w-2/3 rounded-xl bg-slate-100 p-1"
        >
        <CarouselContent>
            {pr.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-1 ">
                    <div className="flex items-center justify-center p-6">
                        <Image src={item.image} alt="anh" width={160} />
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