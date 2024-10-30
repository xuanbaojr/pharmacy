import Image, { StaticImageData } from "next/image"

interface Props {
    image : string | StaticImageData,
    des : string,
    price : number,
    quantity : number,
}

const CheckoutProd =({price, quantity, des, image} : Props) => {

    return (
        <div className="grid grid-cols-8 px-2 text-center">
            <div className="col-span-5 flex gap-4 text-start">
                <div className=" h-20 w-20 border">
                    <Image src={image} alt="asd" className=" object-cover h-full"/>
                </div>
                <div className="text-wrap line-clamp-2">
                    {des}
                </div>
            </div>
            <div className="col-span-1">
                {price}
            </div>
            <div className="col-span-1">
                {quantity}
            </div>
            <div className="col-span-1">
                {price * quantity}
            </div>

        </div>
    )
}

export default CheckoutProd