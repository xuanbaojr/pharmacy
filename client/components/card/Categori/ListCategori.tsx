'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { ListCategori } from "./ItemCategori";
import Categori from "./Categori";


const SlideCategori = () => {
    return (
        <>
        <div className=" w-full">
        <div className="flex-1 px-10  mx-2 flex justify-center items-center">
        <Carousel
            opts={{
                align: "start",
                loop : true,
            }}
            className=" w-full rounded-xl py-2 "
        >
        <CarouselContent>
            {ListCategori.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <Categori categoriItem={item} />
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

export default SlideCategori;
