'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CiCircleChevDown } from "react-icons/ci";
import { CiCircleChevUp } from "react-icons/ci";
interface Props {
    note : string
}


const StateNote = ({note} : Props) => {

    const [explore, setExplore] = useState(false)



    return (
        <div className={` px-2 py-1 `}>
            <div className={` items-start ${explore ? " " : " line-clamp-1"}`}>
                <span className=" flex-none text-lg font-bold">Ghi chú: </span>
                {note}
                <div className="flex border border-gray-200 shadow-sm rounded-lg my-2 mx-4 gap-4 px-2 py-1 ">
                    <div className="w-64 flex-col flex">
                        <span className=" font-bold">Tên người đặt hàng: </span> 
                        <span>asdasd </span>
                    </div>
                    <div className="flex-1 ">
                        <div>
                            <span className=" font-bold">Địa chỉ: </span>asas
                        </div>
                        <div>
                            <span className=" font-bold">Số điện thoại: </span>asda
                        </div>
                    </div>
                </div>
                <div className="flex border border-gray-200 shadow-sm rounded-lg my-2 mx-4 gap-4 px-2 py-1">
                    <div className="w-64 flex flex-col">
                        <span className=" font-bold">Tên người nhận: </span> 
                        <span>asdasd </span>
                    </div>
                    <div className="flex-1 ">
                        <div>
                            <span className=" font-bold">Địa chỉ: </span>asas
                        </div>
                        <div>
                            <span className=" font-bold">Số điện thoại: </span>asda
                        </div>
                    </div>
                </div>
                
                <div>
                    <span className=" text-lg font-bold">Tổng số tiền: </span> asdasda đ
                </div>
            </div>
            <div className=" flex justify-center items-center">
                {
                    !explore ? 
                    <Button onClick={() => setExplore(true)} className=" flex gap-2 items-center ">
                        Xem thêm
                        <CiCircleChevDown />
                    </Button>
                :
                <Button onClick={() => setExplore(false)} className=" flex gap-2 items-center ">
                    Thu gọn
                    <CiCircleChevUp />
                </Button>
                }

            </div>

        </div>
    )
}

export default StateNote ;