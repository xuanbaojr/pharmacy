'use client'

import { useEffect, useState } from "react"
import CartPharmacy from "./CartPharmacy"
import { Button } from "@/components/ui/button"
import {  convertAmount, convertCart, PharmacyState } from "./CartState"
import Link from "next/link"
import { deleteProduct, getAmount, getCarts, getChangeAmount } from "@/api/cart"

interface Props {
    
}

const CartContain = () => {

    const [cartState, setCartState] = useState<PharmacyState[]>([])
    const [amount, setAmount] = useState('')
    const [load, setLoad] = useState(false)
    const fecthData = async () => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return
            const response = await getCarts(token);
            const responeAmount = await getAmount(token)
            setCartState(convertCart(response.data))
            setAmount(convertAmount(responeAmount.data))
        } catch (error) {
            console.error('Lỗi trong hàm handle:', error); // Ghi lại lỗi trong hàm handle
        }
        console.log("asas asda ")
    }

    const hanldChangeAmount = async (prod : number, id : number ) => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return
            await getChangeAmount(token, prod,id );
            console.log("asda" + id)
            setLoad(!load)
        } catch {

        }
    }

    const hanldDeleteProd = async (id : number ) => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return
            await deleteProduct(token, id);
            setLoad(!load)
        } catch {

        }
    }
    useEffect(() => {
        fecthData()
    }, [])
   
    useEffect(() => {
        fecthData()
    }, [load])

    return (
        <div>
            {/* top */}
            <div className="grid grid-cols-10 py-2 px-4 bg-slate-300 rounded-lg text-lg mb-5"> 
                <div className="col-span-6 grid grid-cols-10">
                    <div className="col-span-9">
                        Mô tả sản phẩm
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-10">
                    <div className="col-span-3 text-center font-light text-base">
                        đơn giá
                    </div>
                    <div className="col-span-3 text-center">
                        số lượng
                    </div>
                    <div className="col-span-3 text-center">
                        tổng giá
                    </div>
                    <div className="col-span-1">
                        
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="space-y-2 mt-2 ">
                {
                    cartState.map((item, index) => {
                       
                            return (
                                <CartPharmacy key={index} pharmacy={item}  change={hanldChangeAmount} deleteProd={hanldDeleteProd}/>
                            )
                    })
                }
                
            </div>

            {/* bottom */}
            <div className=" grid grid-cols-10 sticky bottom-0 bg-slate-300 px-4 py-6 mt-10 rounded-sm">
                <div className="col-span-6 grid grid-cols-10">
                    <div className="col-span-1 flex items-center justify-center">
                        
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-10">
                    <div className=" col-span-4">
                    </div>
                    <div className="col-span-4 text-xl flex items-center">
                        Tổng giá trị:  {amount + "đ"  }
                    </div>
                    <div className="col-span-2">
                        <Link href={`/checkout/}`} >
                        <Button className="bg-blue-800 w-full" > mua</Button>   
                        </Link> 
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default CartContain

