import Link from "next/link";
import SlideRe from "./SlideRe";
import { Pharmacy } from "../../card/product/DataProduct";
import { FiChevronsRight } from "react-icons/fi";

interface Props {
    name : string,

}

const FormRe = ({name} : Props) => {

    return (
        <>
        <div className="flex-col rounded-lg  my-4 mx-4 ">
            {/* top view */}
            <div className="flex justify-between px-4 pt-2">
                <span className="text-lg font-semibold">
                    {name}
                </span>
                <div>
                    <Link href={"/shop"} className="flex gap-1 justify-between items-center font-semibold text-sm">
                        <div>Xem thêm </div>
                        <div><FiChevronsRight /></div>
                    </Link>
                </div>

            </div>

            {/* bottom view */}
            <div className="py-1 ">
                <SlideRe slide={Pharmacy} />
            </div>


        </div>
        
        </>
    )
}

export default FormRe;