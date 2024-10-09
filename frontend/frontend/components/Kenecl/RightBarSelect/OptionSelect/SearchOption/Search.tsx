'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";



interface Props {
    value : string,
}

const Search = ({value} : Props) => {

    return (
        <>
        <div className="m-1 ">
            <div className="text-xl px-2 my-2 border-b-2 border-black py-1">
                <span>Tìm kiến bài báo</span>
            </div>
            <div className="w-full bg-[#d9d9d9] rounded-full mt-4 flex justify-center">
                <Input placeholder="tim kiem .. " 
                    className="bg-[#d9d9d9] flex-grow rounded-l-full border-none outline-none text-sm pl-4 py-4" 
                />
                <Button className="rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#FDAB04]/80">
                    <FaSearch className="h-4 w-4"/>
                </Button>
            </div>

        </div>
        </>
    )
}

export default Search;