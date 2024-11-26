import LoadImage from "../LoadImage/LoadImage";
import { PrImage } from "./PrImage";
import PrSlide from "./PrSlide";
import Upload from "./Upload";

interface Props {

}

const TopPr = () => {
    return (
        <>
        <div className="w-full mx-2 px-2 py-1 grid grid-rows-3 grid-flow-col gap-2 h-80">
            <div className="row-span-3">
                <Upload />
            </div>
            <div className="row-span-2 col-span-1">
                <PrSlide pr={PrImage}/>
            </div>

            <div className="col-span-1">
                <LoadImage />
            </div>

            
        </div>
        
        </>
    )
}

export default TopPr;