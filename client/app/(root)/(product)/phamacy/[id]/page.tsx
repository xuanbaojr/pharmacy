import { getMedicineDetail } from "@/api/medicine";
import { convertPharmacy } from "@/components/card/product/DataProduct";
import {
  convertViewPharmacy,
  viewPharmacy,
} from "@/components/card/ViewProduct/ViewDataProduct";
import ViewProduct from "@/components/card/ViewProduct/ViewProduct";
import testJson from "@/utils/testJson.json";

interface Props {}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  // Lấy dữ liệu từ JSON
  const productData = testJson.find((item) => item.id.includes(params.id));
  if (!productData) return;

  const res = await getMedicineDetail(params.id);

  const product: viewPharmacy = await convertViewPharmacy(res.data.data);
  if (!product) return;
  return (
    <>
      <div className="mx-32 px-4 my-5 bg-[white] rounded-lg">
        <ViewProduct product={product} />
      </div>
      <div className="mx-32 px-4 my-5 bg-[white] rounded-lg">
        <div className="my-4">
          <h2 className="text-2xl font-bold mb-2">Thành phần</h2>
          <div dangerouslySetInnerHTML={{ __html: productData.usage }} />
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-bold mb-2">Cách dùng</h2>
          <div dangerouslySetInnerHTML={{ __html: productData.dosage }} />
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-bold mb-2">Tác dụng phụ</h2>
          <div
            dangerouslySetInnerHTML={{ __html: productData.adverseEffect }}
          />
        </div>
        <div className="my-4 bg-yellow-100 p-4">
          <h2 className="text-2xl font-bold mb-2">Lưu ý</h2>
          <div dangerouslySetInnerHTML={{ __html: productData.careful }} />
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-bold mb-2">Bảo quản</h2>
          <div dangerouslySetInnerHTML={{ __html: productData.preservation }} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
