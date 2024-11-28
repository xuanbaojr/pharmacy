import { boolean } from "zod";
import { cart, pharmacy, prescription } from "./CartType";
import { StaticImageData } from "next/image";

export interface PharmacyState {
    image : string 
    name: string,
    price : number,
    quantity : number,
    orderItemID : number,
    totalPrice : string,
    medicineID : string,
}

export interface Amount {
    totalAmount : string,
}

export const convertAmount = (data : any) : string=> {
    return data.totalAmount
}

export const convertCart = (data : any) : PharmacyState[] => {
    const newData : PharmacyState[] = data.map((item : any) => {
        return {
            image : item.mainImage,
            name : item.name,
            quantity : item.quantity,
            price : item.price,
            totalPrice : item.totalPrice,
            medicineID : item.medicineID,
            orderItemID : item.orderItemID 
        }
    })

    return newData;
}