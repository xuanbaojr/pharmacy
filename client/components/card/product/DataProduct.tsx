import { StaticImageData } from "next/image";

export interface pharmacy {
    id : number,
    image : string,
    alt : string,
    name : string,
    sale : number,
    price : number,
    stock : number,
    specification : string,
    totalPage : number
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
            specification : item.specification,
            stock : item.stock,
            totalPage : item.totalPage
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
            specification : data.specification,
            stock : data.stock,
            totalPage: data.totalPage
        }
    

    return da
}