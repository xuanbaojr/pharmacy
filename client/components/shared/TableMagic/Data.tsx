export type TableDataType = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    name: string
    address : string
}

type Status = {
    status : string
}


export const data: TableDataType[] = [
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    name: "ken99@yahoo.com",
    address : "ha nọi"
},
{
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    name: "Abe45@gmail.com",
     address : "ha nọi"
},
{
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    name: "Monserrat44@gmail.com",
     address : "ha nọi"
},
{
    id: "5kma53ae",
    amount: 874,
    status: "success",
    name: "Silas22@gmail.com",
     address : "ha nọi"
},
{
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    name: "carmella@hotmail.com",
     address : "ha nọi"
},
]
export const fiterColumn : Status[] =[
    {
        status : "Đang gửi"
    }, 
    {
        status : "Hoàn thành"
    } ,
    {
        status : "Bị hủy"
    }, {
        status : "Lấy hàng"
    }
]

export const convertMacgicTable = (data : any[]) : TableDataType[] => {
    const newData : TableDataType[] = data.map((item) => {
        return {
            id: item ,
            amount: item ,
            status: item,
            name: item,
            address : item,
        }
    })

    return newData
}

