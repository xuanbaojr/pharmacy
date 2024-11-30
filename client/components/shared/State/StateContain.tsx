'use client'
import { useEffect, useState } from "react"
import CheckoutList from "../Checkout/checkoutprod/CheckoutList"
import StateImage from "./StateImage"
import StateNote from "./StateNote"
import { getStatusOrder } from "@/api/order"
import { convertStatus, status } from "./data"
import { convertProduct } from "../CartList/CartState"

interface Props {
    id : number
}

const StateContain = ({id} : Props) => {
    const [status, setStatus] = useState<status>()
    const handleFetch = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            const respone = await getStatusOrder(token, id)
            setStatus(convertStatus(respone.data))
        } catch {

        }
    }

    useEffect(() => {
        handleFetch()
    }, [])
    if (!status) return

    return (
        <div className=" space-y-4">
            <StateImage state="do" status={status} />
            <CheckoutList list={convertProduct(status.orderItems)}/>

            
        </div>
    )
}

export default StateContain