'use client'
import { Checkbox } from "@/components/ui/checkbox";
import { pharmacy } from "./CartType";
import { useEffect, useState } from "react";
import Quantity from "./option/quantityy";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PharmacyState } from "./CartState";

interface Props {
    pharmacy : PharmacyState,
    change : (des : string | undefined, name : string | undefined) => void
    updateBill : (price : number) => void
    name  : string | undefined
}

const CartPharmacy = ({pharmacy,name,  change, updateBill} : Props) => {

   
    const [prod, setProd] = useState<number>(pharmacy.quantity);

    const changeQuantity = ( change : "-" | "+") => {
        if (change == "+") {
            setProd( prod + 1)
        } else {
            setProd(prod -1)
            if (prod == 0) {
                // dosomething
            }
        }
    }

   

    return (
        <div className="border shadow-sm px-4 py-2 grid grid-cols-10 bg-white rounded-lg ">
            <div className="col-span-6 grid grid-cols-10 ">
                <div className="col-span-1 flex justify-center items-center">
                    <Checkbox checked={pharmacy.check} onCheckedChange={() => {change(pharmacy.description, name )}} className="border-slate-500"/>
                </div>
                <div className="col-span-9 flex gap-2">
                    <div className=" h-20 w-20 border">
                        <Image src={pharmacy.image} alt="asd" className=" object-cover h-full"/>
                    </div>
                    <div className="text-wrap line-clamp-2">
                        {pharmacy.description}
                    </div>
                </div>     
            </div>
            <div className="col-span-4 grid grid-cols-10">
                <div className="col-span-3 text-sm flex justify-center items-center">
                    {pharmacy.price}.000 đ
                </div>
                <div className="col-span-3 flex justify-center items-center px-4 ">
                    <Quantity quantity={prod} change={changeQuantity} />
                </div>
                <div className="col-span-3 flex justify-center items-center">
                    {prod * pharmacy.price}.000 đ
                </div>

                <div className="col-span-1 flex justify-center items-center">
                    <Button>
                        <MdDelete  className="h-5 w-5" color="red" />
                    </Button>
                    
                </div>
            </div>

        </div>
    )
}

export default CartPharmacy