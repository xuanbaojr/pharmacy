'use client'
import { cart } from "../CartList/CartType"
import CheckoutAddress from "./CheckoutAddress"
import CheckoutList from "./checkoutprod/CheckoutList"
import CheckoutPay from "./CheckoutPay"
import { useEffect, useState } from "react"
import { convertAmount, convertCart, PharmacyState } from "../CartList/CartState"
import { getAmount, getCarts } from "@/api/cart"
import { postCheckoutDone } from "@/api/checkout"
import CheckoutOrder, { data, User } from "./CheckoutOrder"


interface Props {

}

const CheckoutContain = () => {
    const [cartState, setCartState] = useState<PharmacyState[]>([])
    const [amount, setAmount] = useState('')

    // thon tin nguoi gui
    const [nameOrder, setNameOrder] = useState("")



    // thong tin nguoi nhan
    const [address, setAddress] = useState("")
    const [name, setName] = useState("as")
    const [phone, setPhone] = useState("")
    const [note, setNote] = useState('')
    const [payment, setPayment] = useState("Trả tiền khi nhận hàng")
    const [done, setDone] = useState(false);

    // const fecthData = async () => {
    //     try {
    //         const token = localStorage.getItem("token")
    //         if(!token) return
    //         const response = await getCarts(token);
    //         const responeAmount = await getAmount(token)
    //         setCartState(convertCart(response.data))
    //         setAmount(convertAmount(responeAmount.data))
    //     } catch (error) {
    //         console.error('Lỗi trong hàm handle:', error); // Ghi lại lỗi trong hàm handle
    //     }
    //     console.log("asas asda ")
    // }
    // useEffect(() => {
    //     fecthData()
    // }, [])

    const checkoutDone = async () => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return
            await postCheckoutDone(token, address, phone,payment, null, "ada","asd","asd"  ); 
            setDone(true)
            console.log('hu ')
        } catch {

        }
    }

    const handle = (user : User) => {
        console.log("ada")
    }


    return (
        <div className=" space-y-4">
            <CheckoutOrder
                user={data}
                changeProfile={handle}
            />
            <CheckoutAddress 
            name ={name}
            setName={setName}
            setAddress={setAddress} 
            address={address}
            phone={phone}
            setPhone={setPhone}
            note={note}
            setNote={setNote}
            />
            <CheckoutList list={cartState}/>
            <CheckoutPay done={checkoutDone} totalPrice={amount}/>
            {
                done && <div>

                </div>
            }


        </div>
    )
}


export default CheckoutContain