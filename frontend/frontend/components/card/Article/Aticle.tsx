import Image from "next/image";
import { Article } from "./dataArticle";
import { convertComment } from "@/utils/comment";
import Link from "next/link";


interface Props {
    article : Article
}

const CardArticle = ({article} : Props) => {

    return (
        <>
        <div className="w-full flex gap-5 ">
            
            <div className="flex justify-center items-start">
                <div className="h-56 max-w-80 overflow-hidden border shadow-sm rounded-3xl">
                    <Image src={article.image} alt={article.alt} className="object-cover h-56 max-w-80 hover:scale-105 duration-700 " />
                </div>
                
            </div>
            <div className="my-1  ">
                <div className="text-sm  ">
                    <span>May 24, 2024   / admin</span>
                </div>
                <div className=" line-clamp-2 text-3xl font-semibold mt-4   ">
                    <Link href={`/article/${article.alt}`} className="hover:text-blue-500"> {article.description}</Link>
                </div>
                <div className=" line-clamp-3 text-sm mt-2 ">
                    { article.label}
                </div>
            </div>
        </div>
        </>
    )
}

export default CardArticle


