
export interface order {
    orderID: number,
    userID: string,
    totalAmount: number,
    status: string,
    createdAt: Date,
    shippingAddress: string,
    isBuy: boolean,
    orderer: null | string,
    consignee: null| string,
    orderPhoneNum: null| string,
    receivePhoneNum: null| string,
    note: null | string,
    paymentMethod: null | string
}

export const convertOrderData = (data : any[]) : order[] => {

    const newData = data.map((item: any) => {
        return {
            orderID:item.orderID,
            userID:item.userID,
            totalAmount:item.totalAmount,
            status:item.status,
            createdAt:item.createAt,
            shippingAddress:item.shippingAddress,
            isBuy:item.isBuy,
            orderer:item.orderer,
            consignee:item.consignee,
            orderPhoneNum:item.orderPhoneNum,
            receivePhoneNum:item.receivePhoneNum,
            note:item.note,
            paymentMethod:item.paymentMethod
        }
    })

    return newData
}



// export const data : order[] = [
//     {
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state: 'do'
//     },
//     {
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state: 'do'
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : 'done'
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : "get"
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : "done"
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : "get"
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : "get"
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : "done"
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : "do"
//     },{
//         nameGu : "toi",
//         nameOrder: "nguyen duc quyen",
//         phoneGu : "029192921",
//         phoneOrder : "01929192",
//         orderId : 1,
//         note : "gui sau 4h chieu",
//         createDate : "22/11/2024",
//         state : "done"
//     },
// ]