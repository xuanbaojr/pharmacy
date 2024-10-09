import { StaticImageData } from "next/image";
import anh from "@/assets/image/logo.png"

export interface Article {
    image : StaticImageData,
    alt : string,
    description : string,
    label : string,
}

export const ListArticle : Article[] =[
    {
        image : anh,
        alt : "ngu",
        description : "The Evolution of Online Pharmacies: Convenience and Care",
        label : "Lorem ipsum dolor sit amet consectetur. Dis odio vitae sit tincidunt vivamus gravida nulla egestas. Pharetra arcu pharetra. Alias dolorem blanditiis quasi ullam corrupti assumenda aut. Qui facere sapiente et voluptate id. Vel facere eos esse ut fugit. Qui quae in facilis suscipit amet quia sed quia",
    },
    {
        image : anh,
        alt : "ngu",
        description : "Safety Tips for Buying Medications Online from a Pharmacy",
        label : "Lorem ipsum dolor sit amet consectetur. Dis odio vitae sit tincidunt vivamus gravida nulla egestas. Pharetra arcu pharetra. Alias dolorem blanditiis quasi ullam corrupti assumenda aut. Qui facere sapiente et voluptate id. Vel facere eos esse ut fugit. Qui",
    },
    {
        image : anh,
        alt : "ngu",
        description : "Top Supplements and Vitamins Recommended by Pharmacists",
        label : "Lorem ipsum dolor sit amet consectetur. Dis odio vitae sit tincidunt vivamus gravida nulla egestas. Pharetra arcu pharetra. Alias dolorem blanditiis quasi ullam corrupti assumenda aut. Qui facere sapiente et voluptate id. Vel facere eos esse ut fugit. Qui quae in facilis suscipit amet quia sed quia",
    }
]