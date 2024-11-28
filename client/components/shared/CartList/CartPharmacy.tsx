'use client'
import { Checkbox } from "@/components/ui/checkbox";
import { pharmacy } from "./CartType";
import { useEffect, useState } from "react";
import Quantity from "./option/quantityy";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PharmacyState } from "./CartState";
import { getChangeAmount } from "@/api/cart";

interface Props {
    pharmacy : PharmacyState,
    change : (prod : number, id : number) => void,
    deleteProd : (id : number ) => void,
}

const CartPharmacy = ({pharmacy, change, deleteProd}: Props) => {

   
    const [prod, setProd] = useState<number>(pharmacy.quantity);

    const changeQuantity = ( changes : "-" | "+") => {
        if (changes == "+") {
            setProd( prod + 1)
        } else {
            setProd(prod - 1)
            if (prod == 0) {
                // dosomething
                return
            }
        }
        change(prod, pharmacy.orderItemID)
    }


    return (
        <div className="border shadow-sm px-4 py-2 grid grid-cols-10 bg-white rounded-lg ">
            <div className="col-span-6 grid grid-cols-10 ">
                <div className="col-span-9 flex gap-2">
                    <div className=" h-20 w-20 border">
                    <Image src={pharmacy.image} alt={"sad"} width={200} height={200} className="object-cover w-full"/>
                    </div>
                    <div className="text-wrap line-clamp-2 py-2">
                        {pharmacy.name}
                    </div>
                </div>     
            </div>
            <div className="col-span-4 grid grid-cols-10">
                <div className="col-span-3 text-sm flex justify-center items-center">
                    {pharmacy.price}đ
                </div>
                <div className="col-span-3 flex justify-center items-center px-4 ">
                    <Quantity quantity={prod} change={changeQuantity} />
                </div>
                <div className="col-span-3 flex justify-center items-center">
                    {pharmacy.totalPrice}đ
                </div>

                <div className="col-span-1 flex justify-center items-center">
                    <Button onClick={() => deleteProd(pharmacy.orderItemID)}>
                        <MdDelete  className="h-5 w-5" color="gray" />
                    </Button>
                    
                </div>
            </div>

        </div>
    )
}

export default CartPharmacy