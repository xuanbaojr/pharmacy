"use client"

import { Button } from "../../ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "../../ui/input";
import ImageSearch from "./ImageSearch";

  
interface Props {

}

const SearchTop = () => {

    const hanldClick = () => {

    }

    return (
        <>
        <div className="flex items-center">
        <div className="flex rounded-full lg:w-56 xl:w-80 bg-[#d9d9d9]">
            <ImageSearch />
            <div className="w-full">
                <Input placeholder="Tìm kiếm .. " className="bg-[#d9d9d9] border-0 " />
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