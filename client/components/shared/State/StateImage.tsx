import { FaBox } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import StateNote from "./StateNote";
interface Props {
    state : "done"|"do"|"get",
    note : string
}

const StateImage = ({state, note} : Props) => {

    const green = '#16a34a'
    const gray = '#4b5563'
    let tick=''
    let ship=''
    let title = ''
    if (state === 'done') {
        tick = green
        ship = green
        title = "Đơn hàng đã được giao đến"
    } else if (state === "do") {
        tick = gray
        ship = green
        title = "Đơn hàng đang được vận chuyển"
    } else {
        tick = gray
        ship = gray
        title = "Đơn hàng đang chuẩn bị"
    }

    return (
        <div className=" border border-gray-200 rounded-lg shadow-sm px-2 py-1 bg-white">
            <div className=" flex justify-center items-center text-gray-400 mx-2 my-4 ">
                <div className={`p-6 rounded-full z-10 border-8 border-[#16a34a] text-green-600`}>
                    <FaBox size={40}/>
                </div>
                <div className={`border-8  ${ship === green ? "border-green-600" : "border-gray-400"} -mx-1 xl:w-64`}>

                </div>
                <div className={`p-6 rounded-full z-10 border-8 ${ship === green ? "border-green-600 text-green-600" : "border-gray-400"}`}>
                    <FaShippingFast size={40}/>
                </div>
                <div className={`border-8  -mx-1 xl:w-64 ${tick ===green ? "border-green-600" : "border-gray-400"}`}>

                </div>
                <div className={`p-6 rounded-full border-8  ${ tick === green ? "border-green-600 text-green-600" : "border-gray-400"}`}>
                    <IoMdCheckmarkCircle size={40}/>
                </div>
            </div>
            <div className=" w-full flex justify-center font-bold text-xl mt-2 text-green-600 ">
                {title}
            </div>

            <div className=" mt-10 mb-2 px-32 ">
                <StateNote note={note} />
            </div>

        </div>
    )
}

export default StateImage