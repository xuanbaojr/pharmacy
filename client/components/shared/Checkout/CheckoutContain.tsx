import { cart } from "../CartList/CartType"
import CheckoutAddress from "./CheckoutAddress"
import CheckoutList from "./checkoutprod/CheckoutList"
import CheckoutPay from "./CheckoutPay"


interface Props {
    listOrder : cart
}

const CheckoutContain = ({listOrder} : Props) => {

    return (
        <div className=" space-y-4">
            <CheckoutAddress />

            <CheckoutList list={listOrder}/>
            <CheckoutPay />

        </div>
    )
}


export default CheckoutContain