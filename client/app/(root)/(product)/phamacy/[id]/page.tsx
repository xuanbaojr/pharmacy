import { getMedicineDetail } from "@/api/medicine";
import { IoIosWarning } from "react-icons/io";
import {
  convertViewPharmacy,
  viewPharmacy,
} from "@/components/card/ViewProduct/ViewDataProduct";
import ViewProduct from "@/components/card/ViewProduct/ViewProduct";
import testJson from "@/utils/testJson.json";

interface Props {}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  // Lấy dữ liệu từ JSON
  // const productData = testJson.find((item) => item.Id.includes(params.id));
  // if (!productData) return;

  const res = await getMedicineDetail(params.id);

  const product: viewPharmacy = await convertViewPharmacy(res.data.data);
  if (!product) return;
  return (
    <>
      <div className="mx-32 px-4 my-5 bg-[white] rounded-lg">
        <ViewProduct product={product} />
      </div>
      {/* <div className="mx-32 px-4 my-5 bg-[white] rounded-lg">
        <div className="my-4">
          <h2 className="text-2xl font-bold mb-2">Thành phần</h2>
          <div>
            <div dangerouslySetInnerHTML={{ __html: productData.Ingredient }} />
            <div dangerouslySetInnerHTML={{ __html: productData.Weight }} />
          </div>
    
        </div>
        <div className="my-4">
          <div dangerouslySetInnerHTML={{ __html: productData.usage }} />
        </div>
        <div className="my-4">
          <div dangerouslySetInnerHTML={{ __html: productData.dosage }} />
        </div>
        <div className="my-4">
          <div
            dangerouslySetInnerHTML={{ __html: productData.adverseEffect }}
          />
        </div>
        <div className="relative my-4 bg-[#FFF3E1] p-4">
            <IoIosWarning className="absolute left-0 top-5 ml-5" color="#F79009" size={24}/>
          <div dangerouslySetInnerHTML={{ __html: productData.careful }} />
        </div>
        <div className="my-4">
          <div dangerouslySetInnerHTML={{ __html: productData.preservation }} />
        </div>
      </div> */}
    </>
  );
};

export default ProductPage;
