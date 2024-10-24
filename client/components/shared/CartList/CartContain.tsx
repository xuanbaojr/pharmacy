'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { cart } from "./type"
import CartPharmacy from "./CartPharmacy"
import CartPresctiption from "./CartPrescription"
import { Button } from "@/components/ui/button"



interface Props {
    cart : cart
}


const CartContain = ({cart} : Props) => {
    const [all, setAll] = useState(false)
    const [bill, setBill] = useState(0)

    const updateBill = (price : number) => {
        const a = price + bill
        setBill(a)
    }

    return (
        <div>
            <div className="grid grid-cols-10 py-2 px-4 bg-slate-400 rounded-lg text-lg "> 
                <div className="col-span-1 text-center">
                    <Checkbox 
                        checked = {all}
                        onCheckedChange={() => setAll(!all)}
                        className="border-black"
                    />
                </div>
                <div className="col-span-6">
                    Mô tả sản phẩm
                </div>
                <div className="col-span-1 text-center">
                    số lượng
                </div>
                <div className="col-span-1 text-center">
                    tổng giá
                </div>
                <div className="col-span-1">
                    
                </div>
            </div>

            <div className="space-y-2 mt-2 ">
                {
                    cart.map((item, index) => {
                        if ('image' in item) {
                            return (
                                <CartPharmacy key={index} pharmacy={item} check={all} updateBill={updateBill}/>
                            )
                        }

                     return (
                        <CartPresctiption key={index} prescription={item} check={all} updateBill={updateBill}/>
                     )
                    })
                }
                
            </div>
            {/* bottom */}
            <div className=" grid grid-cols-10 sticky bottom-0 bg-slate-500 px-2 py-2  ">
                <div className="col-span-1 flex items-center justify-center">
                    <Checkbox 
                        checked = {all}
                        onCheckedChange={() => setAll(!all)}
                        className="border-black"
                    />
                </div>
                <div className="col-span-6">

                </div>
                <div className="col-span-2">
                   Tổng giá trị:  {bill + ".000.đ"  }
                </div>
                <div className="col-span-1">
                    <Button className="bg-blue-800 w-full">
                        mua
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartContain

