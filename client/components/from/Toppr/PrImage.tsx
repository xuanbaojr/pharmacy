import logo1 from "@/assets/pr/anh-qc-thumb.jpg"
import logo3 from "@/assets/pr/y-tuong-quang-cao-ngoai-troi-unique-ooh-36-e1632182975358.jpg"
import logo2 from "@/assets/pr/chup-anh-thuoc-om-02.jpg"
import { StaticImageData } from "next/image";

export interface image {
    image : StaticImageData;
    alt : string,
}

export const PrImage : image[] = [
    {
        image : logo2,
        alt : "12",
    },
    {
        image : logo1,
        alt : " 12 ",
    },
    {
        image : logo3,
        alt : "asd"
    }
]