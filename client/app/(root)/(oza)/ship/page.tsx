'use client'
import { listOrders } from "@/components/shared/CartList/CartType"
import {TableColumns } from "@/components/shared/TableMagic/Colums"
import { convertMacgicTable, TableDataType } from "@/components/shared/TableMagic/Data"
import TableMagic from "@/components/shared/TableMagic/TableMagic"
import { useEffect, useState } from "react"
import { convertOrderData, order } from "./_componen/test"
import { getListForShip } from "@/api/order"


interface Props {

}

export const hand = () => {
    
}

const ShipPage = () => {
    const [list, setList] = useState<TableDataType[]>([])
    const [load, setLoad] = useState(false)
    const handleFecth = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            const respone = await getListForShip(token);
            setList(convertMacgicTable(respone.data))
            console.log(respone)
        } catch {

        }
    }
    useEffect (() => {
        handleFecth()
    },[])
    useEffect (() => {
        handleFecth()
    },[load])

    const handleload = () => {
        setLoad(!load)
    }

    return (
        <div className="px-32 mt-4 ">
            <div className="w-full bg-white py-2 space-y-2">
            <TableMagic 
                listOrder={list}
                columns={TableColumns}
            />
            </div>
        </div>
    )
}


export default ShipPage