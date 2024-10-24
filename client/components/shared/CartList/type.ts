import anh1 from "@/assets/image/555.jpg"
import { StaticImageData } from "next/image"

export interface pharmacy {
    image : string | StaticImageData,
    description : string,
    price : number,
    quantity : number,
}

export interface prescription {
    name : string,
    pharmacy : pharmacy [],
    guide : string,
}

export type cart = (pharmacy | prescription) []


export const listOrder : (pharmacy | prescription) [] = [
    {
        image : anh1,
        description: "mota1",
        price : 212,
        quantity : 1
    },{
        image : anh1,
        description: "mota2",
        price : 232,
        quantity : 1
    },{
        image : anh1,
        description: "mota3",
        price : 232,
        quantity : 1
    },{
        image : anh1,
        description: "mota4",
        price : 563,
        quantity : 1
    },{
        image : anh1,
        description: "mota5",
        price : 312,
        quantity : 1
    },
    // {
    //     image : anh1,
    //     description: "mota6",
    //     price : 123,
    //     quantity : 1
    // },
    //  {
    //     name :"anh7",
    //     pharmacy : [
    //         {
    //             image : anh1,
    //             description: "mota5",
    //             price : 123,
    //             quantity : 1
    //         },{
    //             image : anh1,
    //             description: "mota6",
    //             price : 23,
    //             quantity : 1
    //         }
    //     ],
    //     guide : "day la huong dan "
    // }
]