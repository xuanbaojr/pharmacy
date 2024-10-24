import { StaticImageData } from "next/image";
import anh1 from "@/assets/article/blog-1.jpg"
import anh2 from "@/assets/article/blog-2.jpg"
import anh3 from "@/assets/article/blog-3.jpg"
import anh4 from "@/assets/article/blog-4.jpg"

export interface Article {
    image : StaticImageData,
    alt : string,
    description : string,
    label : string,
}

export const ListArticle : Article[] =[
    {
        image : anh1,
        alt : "ngu",
        description : "The Evolution of Online Pharmacies: Convenience and Care",
        label : "Lorem ipsum dolor sit amet consectetur. Dis odio vitae sit tincidunt vivamus gravida nulla egestas. Pharetra arcu pharetra. Alias dolorem blanditiis quasi ullam corrupti assumenda aut. Qui facere sapiente et voluptate id. Vel facere eos esse ut fugit. Qui quae in facilis suscipit amet quia sed quia",
    },
    {
        image : anh2,
        alt : "ngu2",
        description : "Safety Tips for Buying Medications Online from a Pharmacy",
        label : "Lorem ipsum dolor sit amet consectetur. Dis odio vitae sit tincidunt vivamus gravida nulla egestas. Pharetra arcu pharetra. Alias dolorem blanditiis quasi ullam corrupti assumenda aut. Qui facere sapiente et voluptate id. Vel facere eos esse ut fugit. Qui",
    },
    {
        image : anh3,
        alt : "ngu3",
        description : "Top Supplements and Vitamins Recommended by Pharmacists",
        label : "Lorem ipsum dolor sit amet consectetur. Dis odio vitae sit tincidunt vivamus gravida nulla egestas. Pharetra arcu pharetra. Alias dolorem blanditiis quasi ullam corrupti assumenda aut. Qui facere sapiente et voluptate id. Vel facere eos esse ut fugit. Qui quae in facilis suscipit amet quia sed quia",
    },
    {
        image : anh4,
        alt : "ngu4",
        description : "The Importance of Medication Adherence and How Pharmacies Assist",
        label : "Lorem ipsum dolor sit amet consectetur. Dis odio vitae sit tincidunt vivamus gravida nulla egestas. Pharetra arcu pharetra. Alias dolorem blanditiis quasi ullam corrupti assumenda aut. Qui facere sapiente et voluptate id. Vel facere eos esse ut fugit. Qui",
    }
]