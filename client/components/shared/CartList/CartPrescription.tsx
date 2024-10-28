'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { prescription } from "./CartType"
import { useEffect, useState } from "react"
import CartPharmacy from "./CartPharmacy"
import { PrescriptionState } from "./CartState"
import { UndoIcon } from "lucide-react"

interface Props {
    prescription : PrescriptionState,
    change : (des : string | undefined, name : string | undefined) => void,
    updateBill : (price : number) => void
}

const CartPresctiption = ({prescription, change, updateBill} : Props) => {

    

    return (
        <div className="border shadow-sm ">
            <div className="grid grid-cols-10 px-4 py-2">
                <div className=" col-span-6 grid grid-cols-10">
                    <div className="col-span-1 text-center">
                        <Checkbox checked={prescription.check} onCheckedChange={() => {change( undefined, prescription.name)}} className="border-slate-500"/>
                    </div>
                    <div className="text-wrap line-clamp-1">
                        {prescription.name}
                    </div>
                </div>
            
            </div> 

            <div className=" ">
                {prescription.pharmacy.map((item, index) => {
                    return(
                        <CartPharmacy key={index} pharmacy={item} change={change} name={prescription.name} updateBill={updateBill}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CartPresctiption