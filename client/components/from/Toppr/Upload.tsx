import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image/home1.png";

const Upload = () => {
  return (
    <div className="bg-green-800 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-300">TOP 10 NHÀ THUỐC TỐT NHẤT</span>
          </div>
          <div>
            <div className="flex">
              <h2 className="text-white text-3xl font-bold content-center">Thuốc</h2>
              <div className="mb-2 ml-2">
                <Image src={logo} alt="thuoc" width={100} height={100} />
              </div>
            </div>

            <h2 className="text-white text-3xl font-bold mb-4">
              & thực phẩm chức năng
            </h2>
          </div>
          <p className="text-gray-300 mb-6">
            Chúng tôi cung cấp các sản phẩm chất lượng, uy tín và an toàn cho
            sức khỏe của bạn.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center bg-white text-green-900 font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
          >
            Mua ngay <IoArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upload;
