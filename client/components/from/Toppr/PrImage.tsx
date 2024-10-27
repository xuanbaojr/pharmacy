import logo1 from "@/assets/pr/spoderArt.png"
import logo2 from "@/assets/pr/anh nen logo.png"
import logo3 from "@/assets/pr/giày.png"
import { StaticImageData } from "next/image";

export interface image {
    image : StaticImageData;
    alt : string,
}

export const PrImage : image[] = [
    {
        image : logo1,
        alt : "12",
    },
    {
        image : logo2,
        alt : " 12 ",
    },
    {
        image : logo3,
        alt : "asd"
    }
]