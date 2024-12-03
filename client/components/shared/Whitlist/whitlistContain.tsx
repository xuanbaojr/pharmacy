'use client'

import { useEffect, useState } from "react"
import WhitlistItem from "./whitlistItem"
import { convertPharmacyList, pharmacy } from "@/components/card/product/DataProduct"
import { getWhitslist } from "@/api/medicine"
import { convertWishlist, whitlist } from "./test"

interface Props {

}

const WhitlistContain = () => {
    const [whit, setWhit] = useState<whitlist[]>([])
    const [load, setLoad] = useState(false)
    const handleFetch = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            const respone = await getWhitslist(token)
            console.log(respone.data)
            setWhit(convertWishlist(respone.data))
        } catch {

        }
    }

    const forLoad = () => {
        setLoad(!load)
    }

    useEffect(() => {
        handleFetch()
    }, [])
    useEffect(() => {
        handleFetch()
    }, [load])

    return (
        <div className="">
            <div className="flex items-center py-2 px-4 bg-pink-500 rounded-lg text-lg mb-5  ">
                <div className=" flex-1 line-clamp-2 text-wrap text-white font-bold text-base">
                    Danh mục các sản phẩm yêu thích
                </div>
            </div>

            {/* content whitlist */}
            <div className=" space-y-2 mt-2">
                {
                    whit.map((item, index) => {
                        return (
                            <WhitlistItem setLoad={forLoad} whits={item} key={index} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default WhitlistContain