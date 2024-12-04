import { boolean } from "zod";
import { cart, pharmacy, prescription } from "./CartType";
import { StaticImageData } from "next/image";
import { product } from "../State/data";

export interface PharmacyState {
    image : string 
    name: string,
    price : number,
    quantity : number,
    orderItemID : number,
    totalPrice : number,
    medicineID : number,
}

export interface Amount {
    totalAmount : number,
}

export const convertAmount = (data : any) : number=> {
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

export const convertProduct = (data : product[]) : PharmacyState[] => {
    const newData : PharmacyState[] = data.map((item) => {
        return {
            image : item.mainImage ,
            name: item.name,
            price : item.price,
            quantity : item.quantity,
            orderItemID : item.orderItemID,
            totalPrice : item.totalPrice,
            medicineID : item.medicineID,
        }
    })

    return newData
}