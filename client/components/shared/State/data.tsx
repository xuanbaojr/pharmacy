
export interface product {
    orderItemID: number,
    medicineID: number,
    name: string,
    mainImage: string,
    quantity: number,
    price: number,
    totalPrice: number
}

export interface status {
      orderID: number,
      status: string,
      createdAt: Date,
      shippingAddress: string,
      orderer: null | string,
      consignee: null | string,
      orderPhoneNum: null | string,
      receivePhoneNum: null | string,
      note: null | string,
      paymentMethod: null | string,
      totalAmount: number,
      orderItems: product[]
}

export const convertStatus = (data :any) : status => {

    const newData : status = {
        orderID: data.orderID,
        status: data.status,
        createdAt: data.createdAt,
        shippingAddress: data.shippingAddress,
        orderer: data.orderer,
        consignee: data.consignee,
        orderPhoneNum: data.orderPhoneNum,
        receivePhoneNum: data.receivePhoneNum ,
        note: data.note,
        paymentMethod: data.paymentMethod,
        totalAmount: data.totalAmount,
        orderItems: data.orderItems.map((item : any) => {
            return {
                orderItemID: item.orderItemID,
                medicineID: item.medicineID,
                name: item.name,
                mainImage: item.mainImage,
                quantity: item.quantity,
                price: item.price,
                totalPrice: item.totalPrice,
            }
        })
    }

    return newData
}