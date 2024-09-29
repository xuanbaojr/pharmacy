
import { pharmacy } from "@/components/from/Recomment/testRecomment";
import Image from "next/image";
import Link from "next/link";

interface Props {
    pharmacy : pharmacy
}

const CardProduct = ({pharmacy} : Props) => {

    return (
        <>
        <Link href={"/"} className="flex-col ">
        <div className="flex justify-center bg-slate-400">
            <div className="flex-col">
                <div className="flex ">
                    <Image src={pharmacy.image} alt={pharmacy.alt}  />
                </div>
                <div className="flex-col p-1.5 gap-x-2  justify-evenly bg-white">
                    {/* loai san pham */}
                    <div className="text-left text-sm">
                        Thuốc bổ
                    </div>
                    {/* ten san pham */}
                    <div className=" text-left font-medium text-xl ">
                        {pharmacy.name}
                    </div> 

                    {/* gia ban cung da ban */}
                    <div className="flex justify-between mt-2">
                        <div className="text-lg">
                            {pharmacy.price}
                        </div>
                        
                        <div className="text-lg ">
                            đã bán
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>


        </Link>
        </>
    )
}

export default CardProduct;