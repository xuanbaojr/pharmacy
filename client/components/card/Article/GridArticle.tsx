import CardArticle from "./Aticle"
import { ListArticle } from "./dataArticle"


interface Props {

}

const GridArticle = () => {

    return (
        <>
        <div className="w-full">
            <div className="grid grid-cols-1 gap-1">
                {
                    ListArticle.map((item, index) => {
                        return (
                            <div key={index}>
                                <CardArticle article={item} key={index}/>
                                {
                                    index != ListArticle.length -1  && 
                                    <div className="w-full flex justify-center my-8">
                                        <div className="border-b-2 border-[#E7EAEE] w-11/12 ">
                                        </div>
                                    </div>
                                }
                            </div>
                            
                        ) 
                    })
                }
                
                
            </div>

        </div>
        </>
    )
}

export default GridArticle