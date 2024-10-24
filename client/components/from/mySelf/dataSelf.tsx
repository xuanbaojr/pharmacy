import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export interface ContactInter {
    icon : React.ReactNode,
    label : string,
    des : React.ReactNode[]
}


export const MySelfList : ContactInter[] = [
    {
        icon : <MdOutlineEmail className="h-5 w-5" color="blue"/>,
        label: "Thông tin",
        des : [
        <span>Số điện thoại: 092526366</span>,
        <span>Email: support@gmail.com</span>
        ]
    },
    {
        icon : <FaRegClock className="h-5 w-5" color="blue" />,
        label : "Thời gian mở cửa",
        des : [
            <span>Sáng: 8.30 - 11.30</span>,
            <span>Chiều: 1.30 - 5.00</span>
        ]
    },
    {
        icon: <FaLocationDot className="h-5 w-5" color="blue"/>,
        label: "Địa chỉ",
        des : [
            <span>144, Xuân Thủy, Cầu Giấy, Hà Nội</span>
        ]
    }
]