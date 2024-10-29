import { Button } from "@/components/ui/button";
import { FaLocationDot } from "react-icons/fa6";

interface Props {


}

const CheckoutAddress = () => {

    return (
        <div className="grid grid-rows-2 px-4 py-1 rounded-md bg-slate-100">
            <div className=" text-xl font-semibold text-orange-300 flex items-center gap-4">
                <FaLocationDot />
                Địa chỉ người nhận
            </div>
            <div className="grid grid-cols-10 gap-2 ">
                <div className=" col-span-2 flex items-center ">
                    <div className="text-base font-semibold">
                        <span>Nguyen duc quyen</span>
                    </div>
                </div>

                <div className="flex items-center col-span-6 text-center">
                Số Nhà 22, Ngõ 79/14 Đường Dương Quảng Hàm, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội
                </div>
                <div className="flex items-center justify-center col-span-1">
                    <div className="border border-orange-500 text-orange-500 text-xs px-0.5">mặc định </div>
                </div>
                <div className="flex items-center justify-center">
                    <Button>Thay dổi</Button>
                </div>
            </div>
        </div>
        
    )
}

export default CheckoutAddress