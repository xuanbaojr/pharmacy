import GridArticle from "@/components/card/Article/GridArticle"
import RightBar from "@/components/Kenecl/RightBarSelect/RightBar"

interface Props {

}

const ArticlePage = () => {
    return (
        <>
        <div className="flex gap-5 mt-8 px-10 rounded-lg">
            <div className="w-2/3">
                <GridArticle />
            </div>
            {/* right bar */}
            <div className="w-1/3">
                <RightBar />
            </div>

        </div>
        
        </>
    )
}

export default ArticlePage