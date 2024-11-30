import Link from "next/link"

interface Props {

}

const BottomBar = () => {

    return (
        <div className="mt-4 bg-white shadow-sm">
            <div className="xl:mx-60 lg:mx-32 pt-4 px-2 ">
            <div className="grid grid-cols-5 gap-2 mb-2">
                {/* cot 1 */}
                <div className=" space-y-1">
                    <div className="font-semibold py-1 mb-1 text-base">
                        Chăm sóc khách hàng
                    </div>
                    <div className="text-base space-y-2">
                        <div>Tư vấn trực tuyến</div>
                        <div>Hỏi đáp Ai</div>
                        <div>Hướng dẫn mua hàng</div>
                        <div>Hướng dẫn hóa đơn nhanh</div>
                        <div>Trung tập trợ giúp</div>
                    </div>
                </div>
            {/* cot 2  */}
                <div className=" space-y-1">
                    <div className="text-base font-semibold py-1 mb-1">
                        Về ứng dụng
                    </div>
                    <div className="text-base space-y-2">
                        <div>Next js 14</div>
                        <div>doc .net</div>
                        <div>tailwind</div>
                        <div>shacdn</div>
                        <div>supebase</div>
                    </div>

                </div>
                {/* cot 3 */}
                <div className=" ">
                    <div className="text-base font-semibold py-1 mb-1">
                        Phương thức thanh toán
                    </div>
                    <div className="text-base space-y-2">
                        <div>vnpay</div>
                        <div>mono</div>
                    </div>
                    <div className="text-base font-semibold py-1 mb-1">
                        Đơn vị vận chuyển
                    </div>
                    <div className="text-base space-y-2">
                        <div>VietNam post</div>
                        <div>be</div>
                    </div>
                {/* cot 4 */}
                </div><div className="">
                    <div className="text-base font-semibold py-1 mb-1">
                        Thông tin
                    </div>
                    <div className="text-base space-y-0.5">
                        <div>nguyen duc quyen</div>
                        <div>phan van bao</div>
                        <div>doan manh duong</div>
                    </div>

                </div><div className="">
                    <div className="text-base font-semibold py-1 mb-1">
                        Sản phầm 
                    </div>
                    <div className="text-base space-y-0.5">
                        <div><a href={"/asd"}>github </a></div>
                    </div>
                </div>
            </div>
            <div className="border-t flex gap-3 justify-evenly border-slate-300 mt-3 px-2 py-1.5 ">
                <div className="">
                    2024 pharmacy
                </div>
                <div>
                    Quốc gia & khu vực: Việt Nam
                </div>
            </div>
            </div>
            {/* under  */}
            <div className="bg-[#F7F7F7] flex justify-between items-center text-xs font-light text-[#828282] px-32 py-2">
                <div>
                    Bản quyền © 2024 thuộc về Công ty Cổ phần Bệnh viện Đa khoa Quốc tế Vinmec
                </div>
                <div className="flex ">
                    <div className="px-1.5">
                        <a>Điều khoản sử dụng</a>
                    </div>
                    <div className=" border-l border-[#828282] px-1.5">
                        <a>Chính sách bảo mật</a>
                    </div>
                    <div className=" border-l border-[#828282] px-1.5">
                        <a>Chính sách bảo vệ dữ liệu cá nhân
                        </a>
                    </div>
                    <div className=" border-l border-[#828282] px-1.5">
                        GR Privacy
                    </div>
                    <div className=" border-l border-[#828282] px-1.5">
                        GR Terms
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBar