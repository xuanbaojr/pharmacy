'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { prescription } from "./type"
import { useEffect, useState } from "react"
import CartPharmacy from "./CartPharmacy"

interface Props {
    prescription : prescription,
    check : boolean,
    updateBill : (price : number) => void
}

const CartPresctiption = ({prescription, check, updateBill} : Props) => {

    const [all, setAll] = useState(false)
    useEffect(() => {
        if(check) {
            setAll(true)
        } else {
            setAll(false)
        }
    }, [check]);

    return (
        <div className="border shadow-sm ">
            <div className="grid grid-cols-10 px-4 py-2">
                <div className="col-span-1 text-center">
                    <Checkbox checked={all} onCheckedChange={() => {setAll(!all)}} className="border-slate-500"/>
                </div>
                <div className="text-wrap line-clamp-1">
                    {prescription.name}
                </div>
            </div>

            <div className=" ">
                {prescription.pharmacy.map((item, index) => {
                    return(
                        <CartPharmacy key={index} pharmacy={item} check={all} updateBill={updateBill}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CartPresctiption