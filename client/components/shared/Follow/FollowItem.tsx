import Link from "next/link";
import { order } from "./test";
import { formatNumber } from "@/utils/mixin";

interface Props {
    follow : order,
}

const FollowItem = ({follow} : Props) => {

    return (
        <div className="flex items-center border border-gray-200 bg-white rounded-lg shadow-md">
            <Link href={`/state/${follow.orderID}`} className="w-full flex gap-2 px-4 py-1.5">
                <div className="flex-1">
                    {follow.orderer}
                </div>
                <div className=" flex-1">
                    {follow.consignee === follow.orderer ? "" : follow.consignee}
                </div>
                <div className="flex-1 text-left flex justify-evenly px-2 gap-2">
                    <div className=" flex-1 ">
                        {convertDate(follow.createdAt) }
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
    if (state === "done") {
        return (
            <div className="text-green-600">
                {state}
            </div>
        )
    } else if (state === "do") {
        return (
            <div className=" text-yellow-600">
                {state}
            </div>
        )
    } else {
        return (
            <div className=" text-red-500">
                {state}
            </div>
        )
    }
}

const convertDate = (formattedDate : Date ) => {
 
    const s = formattedDate ? formattedDate.toLocaleDateString() : "";
    return s
}