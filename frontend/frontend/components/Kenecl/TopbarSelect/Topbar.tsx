import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
interface Props {

}

const TopBar = () => {

    return (
        <>
        <div className="w-full bg-[#e1e5f2] rounded-lg flex p-2 justify-between">
            {/* option */}
            <div className="pl-5 ">
                <InSort />
            </div>
            {/* chuyen trang */}
            <div>
                <Page />
                
            </div>

        </div>
        
        </>
    )
}

export default TopBar;

const InSort = () => {

    return (
        <>
        <div className="flex w-full gap-4 items-center">
            <div className="mr-5 font-semibold">
                <span> Sắp xếp theo</span>
            </div>

            <div>
                <Button className="bg-blue-300">
                    Phổ biến
                </Button>
            </div>
            <div>
                <Button className="bg-blue-300">
                    Mới nhất
                </Button>
            </div>

            <div>
            <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" className="bg-blue-300" />
            </SelectTrigger>
            <SelectContent className="bg-blue-500">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
            </Select>
            </div>


        </div>
        </>
    )
}

const Page = () => {

    return (
        <div className="flex justify-between items-center gap-2">
            <div className="flex items-center">
                <span>1</span>
                <span>/</span>
                <span>12</span>

            </div>
            <div className="flex justify-between items-center gap-2 px-2 ">
                <Button className="bg-blue-100 rounded-lg border border-white p-3">
                    <FaChevronLeft />
                </Button>
                <Button className="bg-blue-100 rounded-lg border border-white p-3">
                    <FaChevronRight />
                </Button>

            </div>
        </div>
    )
}