'use client'
import { CiHeart } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { FiShoppingCart } from "react-icons/fi";
import { postCrat } from "@/api/cart";
import { useRouter } from "next/navigation";
import { postWhits } from "@/api/medicine";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface Props {
    id : number
}

const ExploreProduct = ({id} : Props) => {
    const router = useRouter()
    const toastOptions = {
        autoClose: 10200,
    };
    const handleWhist = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            console.log(id)
            const response= await postWhits(token, id)
            
            toast.success("Đã thêm vào yêu thích", toastOptions);
        } catch (error : any){
            if(error.message === 'Request failed with status code 400') {
                toast.warning("Sản phẩm đã có" + error.message, toastOptions);
                console.log(error)
            } else {
                toast.error("Thêm thất bại" + error.message, toastOptions);
            }
            
        }
    }

    const handAddCart = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            console.log(id)
            await postCrat(token, id, 1)
            toast.success("Đã thêm vào giỏ hàng", toastOptions);
        } catch {
            toast.error("Thêm thất bại", toastOptions);
        }
    }

    const handleclick = () => {
        router.push(`/phamacy/${id}`)
        console.log("donw")
    }
    return (
        <div onClick={() => handleclick()} className="w-full h-full flex justify-end">
            <div className="max-w-16">
                <div  onClick={(e) => e.stopPropagation()}  className=" bg-gray-400/90 z-50 rounded-xl flex flex-col gap-2 p-2">
                <Button className=" hover:shadow-sm rounded-full hover:bg-gray-500 p-2" onClick={handleWhist}>
                    <CiHeart size={25}/>
                </Button>
                <Button className=" hover:shadow-sm rounded-full hover:bg-gray-500 p-2" onClick={handAddCart}>
                    <FiShoppingCart size={25}/>
                </Button>
                </div>
            </div>
        </div>
    )
}

export default ExploreProduct