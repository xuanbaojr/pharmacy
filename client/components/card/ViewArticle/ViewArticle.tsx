import Image from "next/image"
import { Article } from "../Article/dataArticle"

interface Props {
    article : Article
}

const ViewArticle = ({article} : Props ) => {

    return (

        <div className="w-full  pt-5">
            <div className="text-sm flex justify-center">
            <span>May 24, 2024   / admin</span>
            </div>
            <div className="text-5xl font-semibold text-wrap p-2 my-2 ">
                {article.label}
            </div>
            <div className="w-full overflow-hidden rounded-3xl my-1">
                <Image src={article.image} alt={article.alt} className=" object-cover w-full hover:scale-105 duration-700" />
            </div>
            <div className="text-xl my-3 px-4 ">
                {article.description}
            </div>

            

            
        </div>
    )
}


export default ViewArticle