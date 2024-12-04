
export interface order {
    orderID: number,
    userID: string,
    totalAmount: number,
    status: string,
    createdAt: string,
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
            createdAt:item.createdAt,
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