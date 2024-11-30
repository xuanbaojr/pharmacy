'use client'
import { CiHeart } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { FiShoppingCart } from "react-icons/fi";
import { postCrat } from "@/api/cart";
interface Props {
    id : number
}

const ExploreProduct = ({id} : Props) => {

    const handleWhist = () => {

    }

    const handAddCart = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return
            console.log(id)
            await postCrat(token, id, 1)
        } catch {

        }
    }
    return (
        <div >
            <div className=" bg-gray-400/90 z-50 rounded-xl flex flex-col gap-2 p-2">
                <Button className=" hover:shadow-sm rounded-full hover:bg-gray-500 p-2" onClick={handleWhist}>
                    <CiHeart size={25}/>
                </Button>
                <Button className=" hover:shadow-sm rounded-full hover:bg-gray-500 p-2" onClick={handAddCart}>
                    <FiShoppingCart size={25}/>
                </Button>
            </div>
        </div>
    )
}

export default ExploreProduct