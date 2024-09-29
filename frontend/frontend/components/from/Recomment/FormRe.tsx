import Link from "next/link";
import SlideRe from "./SlideRe";
import { Pharmacy } from "./testRecomment";
import { FiChevronsRight } from "react-icons/fi";

interface Props {
    name : string,

}

const FormRe = ({name} : Props) => {

    return (
        <>
        <div className="flex-col rounded-lg bg-blue-100 my-4 mx-2 px-2">
            {/* top view */}
            <div className="flex justify-between px-4 pt-3">
                <span className="text-xl font-semibold">
                    {name}
                </span>
                <div>
                    <Link href={"/shop"} className="flex gap-1 justify-between items-center font-semibold text-sm">
                        <div>Xem thêm</div>
                        <div><FiChevronsRight /></div>
                    </Link>
                </div>

            </div>

            {/* bottom view */}
            <div className="py-2 ">
                <SlideRe slide={Pharmacy} />
            </div>


        </div>
        
        </>
    )
}

export default FormRe;