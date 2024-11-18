import { getMedicineDetail } from "@/api/medicine";
import { convertPharmacy} from "@/components/card/product/DataProduct";
import ViewProduct from "@/components/card/ViewProduct/ViewProduct";
import testJson from '@/utils/testJson.json'; 

interface Props {}

const ProductPage = async ({ params }: { params: { id: string } }) => {

    // Lấy dữ liệu từ JSON
    const productData = testJson.find(item => item.usage.includes(params.id));
    if (!productData) return;

    const data = await getMedicineDetail(params.id);
    const product = await convertPharmacy(data.data)
    if(!product) return;
    return (
        <>
            <div className="mx-32 px-4 my-5 bg-[#edf2fb]">
                <ViewProduct product={product} />
                <head>
                    
                </head>
                <div dangerouslySetInnerHTML={{ __html: productData.usage }} className={styles.usage}/>
                {/* <div dangerouslySetInnerHTML={{ __html: productData.dosage }} />
                <div dangerouslySetInnerHTML={{ __html: productData.adverseEffect }} />
                <div dangerouslySetInnerHTML={{ __html: productData.careful }} />
                <div dangerouslySetInnerHTML={{ __html: productData.preservation }} /> */}
            </div>
        </>
    );
};

export default ProductPage;