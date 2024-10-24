'use client'
import { Checkbox } from "@/components/ui/checkbox";
import { pharmacy } from "./type";
import { useEffect, useState } from "react";
import Quantity from "./option/quantityy";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
    pharmacy : pharmacy,
    check : boolean,
    updateBill : (price : number) => void
}

const CartPharmacy = ({pharmacy, check, updateBill} : Props) => {

    const [all, setAll] = useState(check)
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

    useEffect(() => {
        if(check) {
            setAll(true)
            const a = prod * pharmacy.price
            console.log("them " + a)
            updateBill(a)
        } else {
            setAll(false)
            // updateBill(-prod * pharmacy.price)
        }
    }, [check]);

    return (
        <div className="border shadow-sm px-4 py-3 grid grid-cols-10 rounded-lg">
            <div className="col-span-1 flex justify-center items-center">
                <Checkbox checked={all} onCheckedChange={() => {setAll(!all)}} className="border-slate-500"/>
            </div>
            <div className="col-span-5 flex gap-2">
                <div className=" h-20 w-20 border">
                    <Image src={pharmacy.image} alt="asd" className=" object-cover h-full"/>
                </div>
                <div className="text-wrap line-clamp-2">
                    {pharmacy.description}
                </div>
            </div>
            <div className="col-span-1 text-sm flex justify-center items-center">
                {pharmacy.price}.000 đ
            </div>
            <div className="col-span-1 flex justify-center items-center ">
                <Quantity quantity={pharmacy.quantity} change={changeQuantity} />
            </div>
            <div className="col-span-1 flex justify-center items-center">
                {prod * pharmacy.price}.000 đ
            </div>
            <div className="col-span-1 flex justify-center items-center">
                <Button>
                    <MdDeleteOutline className="h-5 w-5" color="red" />
                </Button>
                
            </div>
        </div>
    )
}

export default CartPharmacy