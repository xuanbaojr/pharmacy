import Image from "next/image";
import { Article } from "./dataArticle";
import { convertComment } from "@/utils/comment";


interface Props {
    article : Article
}

const CardArticle = ({article} : Props) => {

    return (
        <>
        <div className="w-full  flex gap-5 ">
            
            <div className="w-2/5 border-2 shadow-sm rounded-lg flex justify-center items-center">
                <Image src={article.image} alt={article.alt} className="w-full" />
            </div>
            <div className="my-4 w-3/5">
                <div className="text-sm ">
                    <span>May 24, 2024   / admin</span>
                </div>
                <div className="text-3xl font-semibold mt-4">
                    <span>{convertComment(article.description, 70) }...</span>
                </div>
                <div className="text-md mt-2 ">
                    { convertComment(article.label, 200) }...
                </div>

            </div>

        

        </div>
        </>
    )
}

export default CardArticle

