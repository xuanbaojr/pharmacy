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
            <TopPr />

            <div className="flex justify-center my-4 mx-2">
                <SlideCategori />
            </div>

            <FormRe name="Ưu Đãi"/>
            <FormRe name="Phổ biến"/>


        </div>
        
        
        </>
    )
}

export default RootPage;