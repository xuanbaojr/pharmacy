'use client'
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { FaCamera } from "react-icons/fa"

import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  
import ImageUpload from "./ImageUpload"
import { useEffect, useState } from "react"
  
  
interface Porps {

}

const ImageSearch = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        
    }
    const handlChange = (change : boolean) => {
        setOpen(change);
    }

    useEffect(() => {
    }, [open])

    return (
        <HoverCard >
            <HoverCardTrigger  className="flex justify-center items-center  border-r rounded-none border-black">
                <div>
                    <Button onClick={handleClick} className="">
                        <FaCamera /> 
                    </Button >
                    
                    {open && 
                    <>
                    <div onClick={() => handlChange(false)} className=" absolute backdrop-brightness-75 z-20 w-full h-full top-0 left-0 flex justify-center items-center">
                      <div onClick={(e) => e.stopPropagation()} className=" bg-white z-20 w-72 px-4 py-2 shadow-lg rounded-xl border xl:w-80 lg:w-60 ">
                        <div className="text-xl font-bold text-blue-800 ">
                            Gửi đơn thuốc để AI hỗ trợ tìm thuốc !
                        </div>
                        <ImageUpload close={handlChange}/>
                        </div>  
                    </div>
                    </>
                    }
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="px-0 shadow-none border-0 flex justify-center text-xs py-0">
                Gửi đơn thuốc cho AI
            </HoverCardContent>
        </HoverCard>
    )
}

export default ImageSearch