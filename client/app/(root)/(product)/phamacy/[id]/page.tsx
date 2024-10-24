import { Pharmacy } from "@/components/card/product/DataProduct";
import ViewProduct from "@/components/card/ViewProduct/ViewProduct"

interface Props {


}


const ProductPage = ({ params }: { params: { id: string } }) => {
    const product = Pharmacy.find(item=> item.sale === params.id);
    if(!product) return;


    return (
        <>
            <div className=" mx-32 px-4 my-5 bg-[#edf2fb]">
                <ViewProduct product={product}/>
            </div>
        </>
    )
}

export default ProductPage