
export interface DataChat {
    type : "right" | "left",
    title : string
}


export const listChat : DataChat[] = [
    {
        type : "right",
        title: "hello, ban co thich toi khong"
    },
    {
        type : "left",
        title : "chao ban, toi la ai cua benh vien",
    },
    {
        type : "right",
        title: "nono",
    },{
        type : "right",
        title: "toi dang hoi ban cau ma ban khong tra loi duoc hay sao. Neu khong tra loi duoc thi phai noi khong duoc"
    }, {
        type: "left",
        title : "bien ca, dien thoai, vaf toi "
    }
]