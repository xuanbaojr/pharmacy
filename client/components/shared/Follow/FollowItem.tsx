import Link from "next/link";
import { order } from "./test";
import { convertDate, formatNumber } from "@/utils/mixin";

interface Props {
    follow : order,
}

const FollowItem = ({follow} : Props) => {

    return (
        <div className="flex items-center border border-gray-200 bg-white rounded-lg shadow-sm">
            <Link href={`/state/${follow.orderID}`} className="w-full flex gap-2 px-4 py-1.5">
                <div className="flex-1">
                    {follow.orderer}
                </div>
                <div className=" flex-1">
                    {follow.consignee}
                </div>
                <div className="flex-1 text-left flex justify-evenly px-2 gap-2">
                    <div className=" flex-1 ">
                        {follow.createdAt}
                    </div>
                    <div className=" flex-1 text-center">
                        {formatNumber(follow.totalAmount)} đ
                    </div>
                    <div className={`flex-1 text-center`}>
                        <State state={follow.status} />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FollowItem

interface stateProps {
    state : string
}


const State = ({state} : stateProps) => {
    if (state === "Delivered") {
        return (
            <div className="text-green-600">
                Đã giao hàng
            </div>
        )
    } else if (state === "Shipped") {
        return (
            <div className=" text-blue-500">
                Đang vận chuyển
            </div>
        )
    }
    else if (state === "Processing") {
        return (
            <div className=" text-orange-500">
                Đang xử lý
            </div>
        )
    } 
    else if (state === "Pending") {
        return (
            <div className=" text-yellow-400">
                Chờ xử lý
            </div>
        )
    }  else {
        return (
            <div className=" text-red-500">
                Đã hủy đơn
            </div>
        )
    }
}
