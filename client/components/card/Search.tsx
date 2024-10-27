"use client"

import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/input";
interface Props {

}

const SearchTop = () => {

    const hanldClick = () => {

    }

    return (
        <>
        <div className="flex items-center">
        <div className="flex rounded-full w-56 bg-[#d9d9d9]">
            <div className="w-full p-1">
                <Input placeholder="tim kiem .. " className="bg-[#d9d9d9] border-0 rounded-full " />
            </div>
            <div className="flex items-center ">
                <Button className="flex justify-center items-center border-l rounded-none border-black">
                    <FaSearch />
                </Button>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default SearchTop;