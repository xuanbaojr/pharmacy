
export interface ImageUrl {
    url : string,
}
export interface viewPharmacy {
    id : number,
    name : string,
    price : number,
    stock : number,
    weight : string,
    category : string,
    specification: string,
    ingredient: string,
    indication: string,
    contraindication: string,
    country: string,
    intendedFor: string,
    images : ImageUrl[],
}

export const convertViewPharmacy = (data: any) : viewPharmacy => {
    const view : viewPharmacy = {
        id : data.id,
        name : data.name,
        price: data.price,
        stock : data.stock,
        weight : data.weight,
        category : data.category,
        specification : data.specification,
        ingredient: data.ingredient,
        indication: data.indication,
        contraindication: data.contraindication,
        country: data.country,
        intendedFor : data.intendedFor,
        images : data.images.map((item : any) => {return item.url})
    }

    return view
}