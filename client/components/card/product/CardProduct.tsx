
import { pharmacy } from "@/components/card/product/DataProduct";
import { convertComment } from "@/utils/comment";
import Image from "next/image";
import Link from "next/link";

interface Props {
    pharmacy : pharmacy
}

const CardProduct = ({pharmacy} : Props) => {

    return (
        <>
        
        <div className="flex justify-center h-full ">
            <Link href={`/phamacy/${pharmacy.sale}`} className="flex-col  hover:border hover:rounded-3xl hover:shadow-2xl ">
            <div className="flex-col w-full h-full bg-[#edf2fb] rounded-3xl">
                <div className="bg-[#cccccc] flex h-2/3 items-center justify-center rounded-3xl overflow-hidden border shadow-sm">
                    <Image src={pharmacy.image} alt={pharmacy.alt} className="object-cover h-full  " />
                </div>
                {/*  */}
                <div className=" grid grid-rows-4 h-1/3 p-1.5 rounded-b-3xl">
                    
                    {/* ten san pham */}
                    <div className=" row-span-2 text-left font-medium text-lg text-wrap line-clamp-2">
                        {convertComment(pharmacy.name, 35)  }
                    </div> 
                {/* loai san pham */}
                    <div className="row-span-1 text-sm flex items-end">
                        Thuốc bổ
                    </div>
                    {/* gia ban cung da ban */}
                    <div className="flex items-end justify-between mx-2 ">
                        <div className="text-sm">
                            {pharmacy.price}.000 đ
                        </div>
                        
                        <div className="text-sm mr-4">
                            đã bán: 8
                        </div>
                    </div>
                </div>
                 
            </div>
            </Link>
        </div>


        
        </>
    )
}

export default CardProduct;