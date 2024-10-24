'use client'

import { Button } from "@/components/ui/button"
import { FaMinus, FaPlus } from "react-icons/fa"

interface Props {
    quantity : number,
    change : (change : "-"|"+") => void
}

const Quantity = ({quantity, change} : Props) => {

    return (
        <div className="grid grid-cols-4 border shadow-sm w-full">
            <div className="col-span-1 p-0 border-r flex justify-center w-full items-center">
                <button onClick={() => change("-")}>
                    <FaMinus className="h-2 w-2"/>
                </button>
            </div>
            <div className=" flex items-center col-span-2 justify-center">
                {quantity}
            </div>
            <div className=" col-span-1 p-0 border-l flex justify-center w-full items-center">
                <button  onClick={() => change("+")}>
                    <FaPlus className="h-2 w-2"/>
                </button>
            </div>

        </div>
    )
}

export default Quantity