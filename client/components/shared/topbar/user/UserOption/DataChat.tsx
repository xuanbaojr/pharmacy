import Image from "next/image"

export interface DataChat {
    type : "right" | "left",
    title :  string
    image : React.ReactNode | null
}


export const listChat : DataChat[] = [
    {
        type : "right",
        title: "hello, ban co thich toi khong",
        image : null
    },
    {
        type : "left",
        title : "chao ban, toi la ai cua benh vien",
        image : null
    },
    {
        type : "right",
        title: "nono",
        image : null
    },{
        type : "right",
        title: "toi dang hoi ban cau ma ban khong tra loi duoc hay sao. Neu khong tra loi duoc thi phai noi khong duoc",
        image : null
    }, {
        type: "left",
        title : "bien ca, dien thoai, vaf toi ",
        image : null
    }
]

export interface Props {
    file : any
}
export const ImageChat = ({file} : Props ) => {

    return (
        <div className="border h-40 w-32">
            <Image src={URL.createObjectURL(file)} width={200} height={300} className="object-cover h-full border" alt="as"/>
        </div>
    )
}