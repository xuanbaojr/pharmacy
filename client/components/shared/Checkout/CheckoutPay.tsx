import { Button } from "@/components/ui/button"
import { listOptionPay } from "./pay/OptionPay"
import { formatNumber } from "@/utils/mixin"

interface Props {
    totalPrice : number
    done : () => void
}


const CheckoutPay = ({totalPrice, done} : Props) => {

    return (
        <div className="grid grid-rows-4 rounded-md bg-white border border-gray-200 shadow-sm ">
            <div className=" row-span-1 grid grid-cols-10 bg-slate-200 px-4">
                <div className="col-span-3 flex items-center px-2 text-xl ">
                    Phương thức thanh toán
                </div>
                <div className="col-span-7 flex gap-4 justify-end pr-2 items-center">
                    
                    {
                        listOptionPay.map((item, index) => {
                            return (
                                <div key={index} className="border-2 border-blue-200">
                                    <Button className="px-2 py-1 ">{item.name}</Button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>

            </div>

            <div className="row-span-2 grid grid-cols-10 px-6 border-y my-1 ">
                <div className="col-span-7">

                </div>
                <div className="col-span-3 grid grid-cols-2 gap-4 my-3 ">
                    <div className="text-sm font-light">Tổng tiền hàng</div><div className="text-end">₫{formatNumber(totalPrice)}</div>
                    <div className="text-sm font-light">Tổng tiền phí vận chuyển</div> <div className="text-end">₫0.000</div>
                    <div className="text-sm font-light">Tổng thanh toán</div><div className="text-end text-3xl">₫{formatNumber(totalPrice)}</div>
                </div>
            </div>

            <div className="row-span-1 grid grid-cols-10 px-4 ">
                <div className="col-span-8">

                </div>
                <div className="col-span-2">
                    <Button onClick={done} className="bg-[#0076C0] text-white  w-full my-4 ">Đặt hàng</Button>
                </div>

            </div>

        </div>
    )
}

export default CheckoutPay