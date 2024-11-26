import { StaticImageData } from "next/image";
// import anh from "@/assets/image/gach.png"
// import anh2 from "@/assets/image/anhho.jpg"
// import threenumber from "@/assets/image/555.jpg"
// import blackCaptain from "@/assets/image/BlackCaptain.jpg"
// import esse from "@/assets/image/Esse.jpg"
// import mond from "@/assets/image/Mond.png"
// import richmond from "@/assets/image/Richmond.jpg"
// import villiger from "@/assets/image/Xi-ga-Villiger.png"
// import blueseal from "@/assets/image/blueseal.jpg"
// import camel from "@/assets/image/camel-fresh-berry.jpg"
// import craven from "@/assets/image/craven.jpg"
// import dunhill from "@/assets/image/dunhill-xanh-lá.jpg"
// import marlboro from "@/assets/image/marlboro.jpg"
// import kent from "@/assets/image/kent.jpg"


export interface pharmacy {
    id : string,
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