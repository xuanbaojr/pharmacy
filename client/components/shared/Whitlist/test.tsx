
export interface whitlist {
    wishlistId : number,
    medicineId : number,
    image : string,
    price : number,
    name : string
}

export const convertWishlist = (data : any[]) : whitlist[] => {
    const newData : whitlist[] = data.map((item : any) => {
        return {
            wishlistId : item.wishlistID,
            medicineId : item.medicineID,
            image : item.mainImage,
            price : item.price,
            name : item.name,
        }
    })

    return newData
}





