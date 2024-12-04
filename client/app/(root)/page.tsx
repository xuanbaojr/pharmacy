import { getMedicine } from "@/api/medicine";
import SlideCategori from "@/components/card/Categori/ListCategori";
import { convertPharmacyList, pharmacy } from "@/components/card/product/DataProduct";
import FormRe from "@/components/from/Recomment/FormRe";
import TopPr from "@/components/from/Toppr/TopPr";

interface Porps {

}

const RootPage = async () => {

    const res : any =  await getMedicine(1, 0, 100000 , '' )
    const res1 : any = await getMedicine(1,null, null,'' ,8, true, false, false)
    const res2 : any = await getMedicine(1,null, null, '', 8, false,false ,true )

    const newdata : pharmacy[] = convertPharmacyList(res.data.data);
    const newdata1: pharmacy[] = convertPharmacyList(res1.data.data);
    const newdata2: pharmacy[] = convertPharmacyList(res2.data.data);

    return (
        <>
        <div className="mt-2 p-2 " >

            <div className="w-full px-5">
                <TopPr />
            </div>

            <div className="flex justify-center my-4 mx-2 px-10">
                <SlideCategori />
            </div>

            <div className="w-full px-20  rounded-lg">
                <FormRe name="Sản phầm trong tầm giá"data={newdata}/>
            </div>
            <div className="w-full px-20  rounded-lg" >
                <FormRe name="Bán chạy nhất" data={newdata1}/>
            </div>
            <div className="w-full px-20  rounded-lg" >
                <FormRe name="Giá từ cao đến thấp" data={newdata2}/>
            </div>

        </div>
        
        
        </>
    )
}

export default RootPage;