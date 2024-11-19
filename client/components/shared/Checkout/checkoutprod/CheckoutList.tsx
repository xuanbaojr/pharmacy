import { cart } from "../../CartList/CartType"
import CheckoutProd from "./Checkoutprod"

interface Props {
    list : cart
}

const CheckoutList = ({list} : Props) => {

    return (
        <div className=" rounded-md bg-white px-2">
            <div className=" grid grid-cols-8 gap-1 py-2 text-center">
                <div className="col-span-5 text-start pl-2">
                    Đơn thuốc
                </div>
                <div className="col-span-1">
                    Đơn giá
                </div>
                <div className="col-span-1">
                    Số lượng
                </div>
                <div className="col-span-1">
                    Thành tiền
                </div>
            </div>

            <div className="py-2 my-2 space-y-2">
                {
                    list.map((item, index) => {
                        if ("price" in item)
                        return (
                            <CheckoutProd 
                            key={index} 
                            price={item.price} 
                            quantity={item.quantity} 
                            des = {item.description}
                            image={item.image} 
                            />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default CheckoutList