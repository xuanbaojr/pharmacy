import SlideCategori from "@/components/card/Categori/ListCategori";
import FormRe from "@/components/from/Recomment/FormRe";
import SlideRe from "@/components/from/Recomment/SlideRe";
import { Pharmacy } from "@/components/from/Recomment/testRecomment";
import TopPr from "@/components/from/Toppr/TopPr";

interface Porps {

}

const RootPage = () => {

    return (
        <>
        <div className="mt-2 p-2">

            <div className="w-full px-5">
                <TopPr />
            </div>
            

            <div className="flex justify-center my-4 mx-2 px-10">
                <SlideCategori />
            </div>

            <div className="w-full px-20  rounded-lg">
                <FormRe name="Ưu Đãi"/>
            </div>
            <div className="w-full px-20  rounded-lg" >
                <FormRe name="Phổ biến"/>
            </div>

            
           


        </div>
        
        
        </>
    )
}

export default RootPage;