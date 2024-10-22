import { ListArticle } from "@/components/card/Article/dataArticle"
import ViewArticle from "@/components/card/ViewArticle/ViewArticle"

interface Props {

}

const ArticlePage = ({ params }: { params: { id: string } }) => {
    const article = ListArticle.find(item => item.alt === params.id)
    if (!article) return

    return (
        <>
        <div className='mx-32 flex justify-center items-center'>
            <ViewArticle article={article} />
           
        </div>
        </>
    )
}

export default ArticlePage