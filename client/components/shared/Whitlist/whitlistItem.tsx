'use client'
import { pharmacy } from "@/components/card/product/DataProduct"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MdDelete } from "react-icons/md"
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link"
import { postCrat } from "@/api/cart"
import { formatNumber } from "@/utils/mixin"
interface Props{
    whits : pharmacy
}

const WhitlistItem = ({whits} : Props) => {

    const handAddCart = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            console.log(whits.id)
            await postCrat(token, whits.id, 1)
        } catch {

        }
    }

    return (
        <div className=" flex items-center border border-gray-200 bg-white rounded-lg shadow-md">
            <div className=" flex-1  ">
                <Link href={'/'} className="flex gap-4 px-2 py-2 w-full h-full">
                <div className=" h-20 w-20 border overflow-hidden rounded-md shadow-sm">
                    <Image src={whits.image} alt={"sad"} width={200} height={200} className="object-cover h-full"/> 
                </div>
                <div className=" pt-2 text-wrap line-clamp-2 ">
                    {whits.name}
                </div>
                </Link>
                
            </div>

            <div className=" flex-none flex items-center gap-3 px-2">
                {/* gia */}
                <div className="text-base font-bold">
                    {formatNumber(whits.price)} đ
                </div>
                <div>
                    <Button onClick={() => handAddCart()}>
                        <FiShoppingCart className="h-5 w-5" color="gray"/>
                    </Button>
                </div>

                <div className="">
                    <Button onClick={() => console.log("xoa")}>
                        <MdDelete  className="h-5 w-5" color="gray" />
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default WhitlistItem