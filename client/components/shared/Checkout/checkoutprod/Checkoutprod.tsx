import Image, { StaticImageData } from "next/image"
import { PharmacyState } from "../../CartList/CartState"

interface Props {
    prod : PharmacyState
}

const CheckoutProd =({prod} : Props) => {

    return (
        <div className="grid grid-cols-8 px-2 text-center">
            <div className="col-span-5 flex gap-4 text-start">
                <div className=" h-20 w-20 border">
                <Image src={prod.image} alt={"sad"} width={200} height={200} className="object-cover w-full"/>
                </div>
                <div className="text-wrap py-2 line-clamp-2">
                    {prod.name}
                </div>
            </div>
            <div className="col-span-1">
                {prod.price}
            </div>
            <div className="col-span-1">
                {prod.quantity}
            </div>
            <div className="col-span-1">
                {prod.totalPrice}
            </div>

        </div>
    )
}

export default CheckoutProd