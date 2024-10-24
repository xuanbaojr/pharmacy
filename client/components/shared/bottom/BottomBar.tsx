import Link from "next/link"

interface Props {

}

const BottomBar = () => {

    return (
        <div className="mt-4 bg-slate-100 shadow-sm">
            <div className="mx-32 py-4 px-2 ">
            <div className="grid grid-cols-5 ">
                <div className="">
                    <div className="text-sm font-semibold py-1 mb-1">
                        chăm sóc khách hàng
                    </div>
                    <div className="text-sm space-y-0.5">
                        <div>Tư vấn trực tuyến</div>
                        <div>Hỏi đáp Ai</div>
                        <div>Hướng dẫn mua hàng</div>
                        <div>Hướng dẫn hóa đơn nhanh</div>
                        <div>Trung tập trợ giúp</div>
                    </div>
                </div>

                <div className="">
                    <div className="text-sm font-semibold py-1 mb-1">
                        Về ứng dụng
                    </div>
                    <div className="text-sm space-y-0.5">
                        <div>Next js 14</div>
                        <div>doc .net</div>
                        <div>tailwind</div>
                        <div>shacdn</div>
                        <div>supebase</div>
                    </div>

                </div>
                <div className="">
                    <div className="text-sm font-semibold py-1 mb-1">
                        Phương thức thanh toán
                    </div>
                    <div className="text-sm space-y-0.5">
                        <div>vnpay</div>
                        <div>mono</div>
                    </div>
                    <div className="text-sm font-semibold py-1 mb-1">
                        Đơn vị vận chuyển
                    </div>
                    <div className="text-sm space-y-0.5">
                        <div>VietNam post</div>
                        <div>be</div>
                    </div>

                </div><div className="">
                    <div className="text-sm font-semibold py-1 mb-1">
                        Thông tin
                    </div>
                    <div className="text-sm space-y-0.5">
                        <div>nguyen duc quyen</div>
                        <div>phan van bao</div>
                        <div>doan manh duong</div>
                    </div>

                </div><div className="">
                    <div className="text-sm font-semibold py-1 mb-1">
                        Sản phầm 
                    </div>
                    <div className="text-sm space-y-0.5">
                        <div><a href={"/asd"}>github </a></div>
                        
                    </div>

                </div>

            </div>
            <div className="border-t flex gap-3 justify-evenly border-slate-300 mt-3 p-3 ">
                <div className="">
                    2024 pharmacy
                </div>
                <div>
                    Quốc gia & khu vực: Việt Nam
                </div>
            </div>
            </div>
{/* under  */}
            <div className="bg-slate-200">
                <div>

                </div>
            </div>
        </div>
    )
}

export default BottomBar