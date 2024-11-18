import { convertPharmacy } from "@/components/card/product/DataProduct";
import ViewProduct from "@/components/card/ViewProduct/ViewProduct"
import instance from "@/utils/axios";

interface Props {


}


const ProductPage = async ({ params }: { params: { id: string } }) => {
    const data = await instance.get(`/api/RMD01/${params.id}`);
    const product = await convertPharmacy(data.data)
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