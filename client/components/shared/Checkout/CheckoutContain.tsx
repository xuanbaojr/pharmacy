'use client'
import { cart } from "../CartList/CartType"
import CheckoutAddress from "./CheckoutAddress"
import CheckoutList from "./checkoutprod/CheckoutList"
import CheckoutPay from "./CheckoutPay"
import { useEffect, useState } from "react"
import { convertAmount, convertCart, PharmacyState } from "../CartList/CartState"
import { getAmount, getCarts } from "@/api/cart"


interface Props {
    listOrder : cart
}

const CheckoutContain = ({listOrder} : Props) => {
    const [cartState, setCartState] = useState<PharmacyState[]>([])
    const [amount, setAmount] = useState('')
    const fecthData = async () => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return
            const response = await getCarts(token);
            const responeAmount = await getAmount(token)
            setCartState(convertCart(response.data))
            setAmount(convertAmount(responeAmount.data))
        } catch (error) {
            console.error('Lỗi trong hàm handle:', error); // Ghi lại lỗi trong hàm handle
        }
        console.log("asas asda ")
    }
    useEffect(() => {
        fecthData()
    }, [])

    return (
        <div className=" space-y-4">
            <CheckoutAddress />
            <CheckoutList list={cartState}/>
            <CheckoutPay totalPrice={amount}/>

        </div>
    )
}


export default CheckoutContain