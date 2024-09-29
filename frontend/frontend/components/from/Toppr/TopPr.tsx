import { PrImage } from "./PrImage";
import PrSlide from "./PrSlide";
import Upload from "./Upload";

interface Props {

}

const TopPr = () => {
    return (
        <>
        <div className="w-full mx-2 px-2 py-1 flex justify-between gap-10">
            <Upload />

            <div className="w-2/3">
                <PrSlide pr={PrImage}/>
            </div>

            
        </div>
        
        </>
    )
}

export default TopPr;