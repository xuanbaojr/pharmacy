
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
        
        <div className="flex justify-center h-full border shadow-lg">
            <Link href={"/"} className="flex-col ">
            <div className="flex-col w-full h-full">
                <div className="flex h-2/3  bg-white items-center justify-center border shadow-sm">
                    <Image src={pharmacy.image} alt={pharmacy.alt} className="h-full " />
                </div>
                {/*  */}
                <div className="grid grid-rows-4 h-1/3 p-1.5  bg-white">
                    
                    {/* ten san pham */}
                    <div className="row-span-2 text-left font-medium text-sm ">
                        {convertComment(pharmacy.name, 35)  }
                    </div> 
                {/* loai san pham */}
                    <div className="text-left text-sm">
                        Thuốc bổ
                    </div>
                    {/* gia ban cung da ban */}
                    <div className="flex items-end mt-1">
                        <div className="text-sm">
                            ${pharmacy.price}.000
                        </div>
                        
                        {/* <div className="text-lg ">
                            đã bán
                        </div> */}
                    </div>
                </div>
                 
            </div>
            </Link>
        </div>


        
        </>
    )
}

export default CardProduct;