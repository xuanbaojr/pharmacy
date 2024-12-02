import { StaticImageData } from "next/image";

export interface pharmacy {
    id : number,
    image : string,
    alt : string,
    name : string,
    sale : string,
    price : number,

}


export const convertPharmacyList = (data : any[]) : pharmacy[] => {
    const da : pharmacy[] = data.map((item : any )=> {
        return {
            id : item.id,
            image : item.mainImage,
            alt : item.alt,
            name : item.name,
            sale : item.numberOfSale,
            price : item.price,

        }
    })

    return da
}
export const convertPharmacy = (data : any) : pharmacy => {
    const da : pharmacy = {
            id : data.id,
            image : data.id,
            alt : data.alt,
            name : data.name,
            sale : data.sale,
            price : data.price,
        }
    

    return da
}