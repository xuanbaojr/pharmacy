import Image from "next/image"
import ImageProduct from "./ImageProduct"
import InforProduct from "./InforProduct"
import { pharmacy } from "../product/DataProduct"

interface Props {
    product : pharmacy 
}

const ViewProduct = ({product} : Props) => {
    return (
        <>
        <div className="w-full flex gap-5 px-2 py-4 ">
            <div className="w-2/5">
                <ImageProduct image={product?.image}/>
            </div>
            <div className="w-3/5">
                <InforProduct product={product}/>
            </div>

        </div>
        </>
    )
}

export default ViewProduct