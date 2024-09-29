import { StaticImageData } from "next/image";
import anh from "@/assets/image/gach.png"
import anh2 from "@/assets/image/anhho.jpg"

export interface pharmacy {
    image : StaticImageData,
    alt : string,
    name : string,
    sale : number,
    price : number,
}

export const Pharmacy : pharmacy[] = [
    {
        image : anh,
        alt : " asdad",
        name : 'thuoc 1 la ten cua mot loai thuoc qua hay ',
        sale : 1,
        price : 2,
    },
    {
        image : anh2,
        alt : " asdad",
        name : 'thuoc 1',
        sale : 1,
        price : 2,
    },
    {
        alt : " asdad",
        image : anh,
        name : 'thuoc 1',
        sale : 1,
        price : 2,
    },
    {
        alt : " asdad",
        image : anh,
        name : 'thuoc 1',
        sale : 1,
        price : 2,
    },
    {
        image : anh2,
        alt : " asdad",
        name : 'thuoc 1',
        sale : 1,
        price : 2,
    },
    {
        image : anh,
        alt : " asdad",
        name : 'thuoc 1',
        sale : 1,
        price : 2,
    },
    {
        image : anh,
        alt : " asdad",
        name : 'thuoc 1',
        sale : 1,
        price : 2,
    }
]