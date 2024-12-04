"use client"

import { Button } from "../../ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "../../ui/input";
import ImageSearch from "./ImageSearch";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Location } from "@/app/(root)/(user)/shop/[id]/page";
import { Ellipsis, Circle } from 'react-spinners-css';
  
interface Props {

}

const SearchTop = () => {
    const router = useRouter()
    const [search, setSearch] = useState<string>('')
    const [load, setLoad] = useState(false)
    const hanldClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const enterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            searchName()
          }
        
    }
    const searchName = async () => {
        setLoad(true)
        const location : Location = {
            aiSearch : search
        }
        const userString = encodeURIComponent(JSON.stringify(location));
        router.push(`/shop/${userString}`)
        setLoad(false)
    }

    return (
        <>
        <div className="flex items-center">
        <div className="flex rounded-full lg:w-56 xl:w-80 bg-[#d9d9d9]">
            <ImageSearch />
            <div className="w-full">
                <Input type="text" onKeyPress={enterPress}  value={search} onChange={hanldClick} placeholder="Tìm kiếm .. " className="bg-[#d9d9d9] border-0 " />
            </div>
            <div className="flex items-center ">
                {
                    load? 
                    <Circle size={20}/>
                    :
                    <Button onClick={searchName} className="flex justify-center items-center border-l rounded-none border-black">
                    <FaSearch />
                </Button>
                }
            </div>
        </div>
        </div>
        
        </>
    )
}

export default SearchTop;