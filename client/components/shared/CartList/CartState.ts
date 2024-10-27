import { boolean } from "zod";
import { cart, pharmacy, prescription } from "./CartType";
import { StaticImageData } from "next/image";

export interface PharmacyState {
    image : string | StaticImageData,
    description : string,
    price : number,
    quantity : number,
    check : boolean,
}

export interface PrescriptionState {
    name : string,
    guide : string,
    check : boolean,
    pharmacy : PharmacyState[]
}


export const convertCartState = (cart : cart) : (PharmacyState | PrescriptionState)[] => {
    if (!cart || cart.length == 0) return []

    const cartState: (PharmacyState | PrescriptionState)[] = cart.map(item => {
        if ('name' in item) {
            // Nếu item là prescription
            return {
                name: item.name,
                guide: item.guide,
                check: false,
                pharmacy: item.pharmacy.map(ph => ({
                    image: ph.image,
                    description: ph.description,
                    price: ph.price,
                    quantity: ph.quantity,
                    check: false // Thêm thuộc tính check
                }))
            } as PrescriptionState;
        } else {
            // Nếu item là pharmacy
            return {
                image: item.image,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
                check: false // Thêm thuộc tính check
            } as PharmacyState;
        }
    });
    // Kết quả
    return cartState
}