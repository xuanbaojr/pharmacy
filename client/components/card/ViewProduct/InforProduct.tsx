'use client'
import { Button } from "@/components/ui/button"
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { pharmacy } from "../product/DataProduct";
import useEmblaCarousel from 'embla-carousel-react'
import { viewPharmacy } from "./ViewDataProduct";
import { formatNumber } from "@/utils/mixin";
interface Props {
    product : viewPharmacy
}


const InforProduct = ({product} : Props) => {
    const [emblaRef] = useEmblaCarousel()
    return (
        <>
        <div className="w-full px-2 ">
            <div className="text-2xl font-semibold my-2 px-1">
                {product.name}
            </div>

            
            {/* price */}
            <div className="text-2xl font-semibold my-2  text-blue-700 py-2 rounded-lg">
                {formatNumber(product.price)} đ
            </div>

            {/* description */}
            <div className="w-full text-sm font-light px-2 my-2 space-y-1">
                    <div className="grid grid-cols-3 ">
                        <div className="col-span-1">
                            Danh mục
                        </div>
                        <div className="col-span-2">
                            {product.category}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="col-span-1">
                            Quy cách
                        </div>
                        <div  className="col-span-2">
                            {product.specification}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div  className="col-span-1">
                            Thành phần
                        </div>
                        <div className="col-span-2">
                            {product.ingredient}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="col-span-1">
                            Xuất xứ thương hiệu
                        </div>
                        <div className="col-span-2">
                            {product.country}
                        </div>
                    </div>  
                    <div className="grid grid-cols-3 ">
                        <div className="col-span-1">
                            Chỉ định
                        </div>
                        <div className="col-span-2">
                            {product.indication}
                        </div>
                    </div>   
                    <div className="grid grid-cols-3 ">
                        <div className="col-span-1">
                            Chống chỉ định
                        </div>
                        <div className="col-span-2">
                            {product.contraindication}
                        </div>
                    </div>
                       
            </div>

            {/* option */}
            <div className="w-full px-2 my-2 py-2 ">
                {/* so luong */}
                <div className="w-full flex items-center justify-start gap-4 ">
                    <div className="">
                        <span>Số lượng</span>
                    </div>
                    <div className="border shadow-sm flex items-center">
                        <div className="w-1/4 flex justify-center border-r">
                            <Button><FaMinus className="h-2 w-2"/></Button>
                        </div>
                        <div className="flex-1 text-center">
                            <span>1</span>
                        </div>
                        <div className="w-1/4 flex justify-center border-l">
                            <Button><FaPlus className="h-2 w-2"/></Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* pay */}
            <div className="w-full flex px-2 space-x-4 py-2 my-2 ">
                <Button className="flex items-center border shadow-sm text-lg text-white bg-blue-600 gap-2  hover:bg-blue-400 hover:border">
                    <MdShoppingCartCheckout className="w-5 h-5 "/>
                    <span>Thêm vào giỏ hàng</span>
                </Button>
                <Button className="flex items-center border text-lg shadow-sm text-white bg-red-600 hover:bg-red-400">
                    <span>Mua ngay</span>
                </Button>

            </div>


       

        </div>
        
        </>
    )
}

export default InforProduct