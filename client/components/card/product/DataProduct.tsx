import { StaticImageData } from "next/image";
import anh from "@/assets/image/gach.png"
import anh2 from "@/assets/image/anhho.jpg"
import threenumber from "@/assets/image/555.jpg"
import blackCaptain from "@/assets/image/BlackCaptain.jpg"
import esse from "@/assets/image/Esse.jpg"
import mond from "@/assets/image/Mond.png"
import richmond from "@/assets/image/Richmond.jpg"
import villiger from "@/assets/image/Xi-ga-Villiger.png"
import blueseal from "@/assets/image/blueseal.jpg"
import camel from "@/assets/image/camel-fresh-berry.jpg"
import craven from "@/assets/image/craven.jpg"
import dunhill from "@/assets/image/dunhill-xanh-lá.jpg"
import marlboro from "@/assets/image/marlboro.jpg"
import kent from "@/assets/image/kent.jpg"


export interface pharmacy {
    image : StaticImageData,
    alt : string,
    name : string,
    sale : string,
    price : number,
}

export const Pharmacy : pharmacy[] = [
    {
        image : threenumber,
        alt : "555",
        name : 'Thuốc 3 số (Thuốc lá 555) asd asd asd asd f dfgas asd ',
        sale : '1',
        price : 26.000,
    },
    {
        image : blackCaptain,
        alt : " Thuốc lá Captain Black",
        name : 'Captain Black classic 8 aroma',
        sale : '2',
        price : 120.000,
    },
    {
        alt : "Thuốc lá Blue Seal",
        image : blueseal,
        name : 'Thuốc lá Blue Seal',
        sale : '3',
        price : 20.000 ,
    },
    {
        alt : "Thuốc lá Camel",
        image : camel,
        name : 'Thuốc lá Camel',
        sale : '4',
        price : 45.000,
    },
    {
        image : craven,
        alt : "Thuốc lá con mèo (Thuốc lá Craven)",
        name : 'Thuốc lá con mèo (Thuốc lá Craven)',
        sale : '5',
        price : 20.000,
    },
    {
        image : dunhill,
        alt : "Thuốc lá Dunhill",
        name : 'Thuốc lá Dunhill',
        sale : '6',
        price : 550.000,
    },
    {
        image : esse,
        alt : "Thuốc lá Esse",
        name : 'Thuốc lá Esse',
        sale : '7',
        price : 30.000,
    },
    {
        image : kent,
        alt : "Thuốc lá Kent",
        name : 'Thuốc lá Kent',
        sale : '8',
        price :  20.000,
    },
    {
        image : marlboro,
        alt : "Thuốc lá Marlboro",
        name : 'Thuốc lá Marlboro',
        sale : '9',
        price : 20.000,
    },
    {
        image : mond,
        alt : "Thuốc lá thơm (Thuốc lá Mond)",
        name : 'Thuốc lá thơm (Thuốc lá Mond)',
        sale : '10',
        price : 90.000,
    },
    {
        image : richmond,
        alt : "Thuốc lá Richmond",
        name : 'Thuốc lá Richmond',
        sale : '11',
        price : 45.000,
    },
    {
        image : villiger,
        alt : "Thuốc lá 7 màu",
        name : 'Thuốc lá 7 màu',
        sale : '12',
        price : 180.000,
    }
]

export const convertPharmacy = (data : any[]) : pharmacy[] => {
    const da : pharmacy[] = data.map((item : any )=> {
        return {
            image : item.id,
            alt : item.alt,
            name : item.name,
            sale : item.sale,
            price : 1,
        }
    })

    return data
}