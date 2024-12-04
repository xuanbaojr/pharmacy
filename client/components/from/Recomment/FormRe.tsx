import Link from "next/link";
import SlideRe from "./SlideRe";
import { FiChevronsRight } from "react-icons/fi";
import { pharmacy } from "@/components/card/product/DataProduct";

interface Props {
    name : string,
    data : pharmacy[]
}

const FormRe = ({name, data} : Props) => {

    return (
        <>
        <div className="flex-col rounded-lg  my-4 mx-4 bg-white">
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
                <SlideRe slide={data} />
            </div>


        </div>
        
        </>
    )
}

export default FormRe;