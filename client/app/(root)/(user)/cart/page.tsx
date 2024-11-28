import { getListCart } from "@/api/cart"
import CartContain from "@/components/shared/CartList/CartContain"
import { listOrder } from "@/components/shared/CartList/CartType"


const CartPage = async () => {
    const res : any = await getListCart();
    console.log(res)
    

    return (
        <div className="mx-32 px-4 my-5 ">
            <CartContain cart={listOrder}/>
        </div>
    )
}

export default CartPage