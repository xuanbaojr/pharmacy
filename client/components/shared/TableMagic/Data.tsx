export type TableDataType = {
    id: number
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    name: string
    address : string
}

type Status = {
    status : string
    value : string
}


export const fiterColumn : Status[] =[
    {
        status : "Chờ xử lý",
        value : "Pending"
    }, {
        status : "Đang xử lý",
        value : "Processing"
    } ,{
        status : "Đang vận chuyển",
        value : "Shipped"
    }, 
    {
        status : "Đã giao hàng",
        value : "Delivered"
    },
    {
        status : "Hủy",
        value : "Cancelled"
    }
]

export const convertMacgicTable = (data : any[]) : TableDataType[] => {
    const newData : TableDataType[] = data.map((item) => {
        return {
            id: item.orderID ,
            amount: item.totalAmount ,
            status: item.status,
            name: item.consignee,
            address : item.shippingAddress,
        }
    })

    return newData
}


export const convertStatus = (status: string ) : React.ReactNode => {
    if (status === 'Pending') {
        return <div className=" text-yellow-400">Chờ xử lý</div>
    } else if (status === 'Processing') {
        return <div className=" text-orange-500">Đang xử lý</div>
    } else if (status === 'Shipped') {
        return <div className=" text-blue-500">Đang vận chuyển</div>
    } else if (status === 'Delivered') {
        return <div className=" text-green-600">Đã giao hàng</div>
    } else if (status === 'Cancelled') {
        return <div className="text-red-500">Hủy</div>
    } 
}

