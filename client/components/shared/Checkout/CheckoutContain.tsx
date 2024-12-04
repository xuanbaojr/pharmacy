'use client'
import { cart } from "../CartList/CartType"
import CheckoutAddress from "./CheckoutAddress"
import CheckoutList from "./checkoutprod/CheckoutList"
import CheckoutPay from "./CheckoutPay"
import { useEffect, useState } from "react"
import { convertAmount, convertCart, PharmacyState } from "../CartList/CartState"
import { getAmount, getCarts } from "@/api/cart"
import { postCheckoutDone } from "@/api/checkout"
import CheckoutOrder from "./CheckoutOrder"
import { user } from "./user"
import { getUser, postUser } from "@/api/user"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {

}

const CheckoutContain = () => {
    const [cartState, setCartState] = useState<PharmacyState[]>([])
    const [amount, setAmount] = useState(0)
    const router = useRouter()
    // thon tin nguoi gui
    const [user, setUser] = useState<user>()

    // thong tin nguoi nhan
    const [address, setAddress] = useState("")
    const [name, setName] = useState("as")
    const [phone, setPhone] = useState("")
    const [note, setNote] = useState('')
    const [payment, setPayment] = useState("Trả tiền khi nhận hàng")
    const [done, setDone] = useState(true);
    const toastOptions = {
        autoClose: 2000,
    };
    const fecthData = async () => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return
            const response = await getCarts(token);
            const user = await getUser(token)
            const responeAmount = await getAmount(token)
            setUser(user.data)
            setCartState(convertCart(response.data))
            setAmount(convertAmount(responeAmount.data))
        } catch (error) {
            console.error('Lỗi trong hàm handle:', error); // Ghi lại lỗi trong hàm handle
        }
    }
    useEffect(() => {
        fecthData()
    }, [])
  

    const checkoutDone = async () => {
        if (phone=== '' || address === '' || !user) {
            toast.warning("Thiếu thông tin")
        } else {
            try {
            const token = localStorage.getItem("token")
            if(!token) return
            await postCheckoutDone(token, address, user.phoneNumber,payment, note, user.fullName, name, phone  ); 
            toast.success("Mua thành công!", toastOptions);
            router.push("/follow")
            } catch {
            toast.error("Mua thất bại!", toastOptions);
            }
        }
        
    }

    const handle = async (name: string, phone : string, address : string) => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return
            await postUser(token, name, phone, address)
            fecthData()
        } catch {

        }
    }

    
    return (
        <div className=" space-y-4">

            {
                user && <CheckoutOrder
                user={user}
                changeProfile={handle}
            />
            }
            
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
            


        </div>
    )
}


export default CheckoutContain