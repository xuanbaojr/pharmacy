'use client'
import Image from "next/image";
import Link from "next/link";
interface Props {
}
const LoadImage = () => {
    return (
        <div className=" h-full w-full bg-blue-500 rounded-xl grid grid-cols-3 gap-0 px-2">
            <div className=" col-span-1 flex flex-1 items-center text-white ml-4 font-medium">
                Tham khảo ngay các ý kiến từ chuyên gia
            </div>
            <div className=" flex items-center justify-center h-full gap-4 overflow-hidden">
              <div className="h-full overflow-hidden ">
                <Image src={'/assets/pr/doctor.png'} alt="asda" width={120} height={120} className="object-cover h-full"/>
              </div>
              <div className=" ">
                <Image src={'/assets/pr/nurse.png'} alt="asda" width={50} height={80} className="object-cover h-full mt-14  "/>
              </div>
              
            </div>
            <div className=" flex items-center justify-end px-4 ">
              <Link href={'/article'} className="bg-white px-2 py-1 hover:bg-gray-200 text-blue-500 text-lg font-semibold gap-2 flex" type="submit">
                  <span>Đọc ngay</span>
              </Link>
            </div>
              
            
        </div>
      
    )
}
export default LoadImage
