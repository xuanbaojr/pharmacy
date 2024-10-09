import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Props {
    value : string,
}

export const PriceSelect = ({value} : Props) => {

    return (
        <>
        <div className="m-1 ">
            <div className="flex px-1 gap-1 justify-start items-center border-b-2 border-black mb-2">
                <span className="text-lg">
                    Khoảng giá
                </span>
            </div>
            <div className="">
                <div className="flex justify-between gap-3">
                    <Input placeholder="từ"/>
                    <Input placeholder="đến"/>
                </div>
                <Button className="w-full rounded-lg bg-blue-500 flex justify-center items-center mt-3 ">
                    <div>
                        Áp dụng
                    </div>
                </Button>
                
            </div>
        </div>

        </>
    )
}

export default PriceSelect