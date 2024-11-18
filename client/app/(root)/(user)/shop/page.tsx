import TopBar from "@/components/Kenecl/TopbarSelect/Topbar";
import SideBar from "@/components/Kenecl/SideBarSelect/SideBar";
import GridProduct from "@/components/card/product/GridProduct";
import { getMedicine } from "@/api/medicine";


interface Props {

}

const ShopPage = () => {

    return (
        <>
        <div className="flex gap-5 mt-3 px-10 rounded-lg">
            <div className="w-1/6">
                <SideBar />

            </div>
            <div className="w-5/6">
                <div>
                    <TopBar />
                </div>
                {/* prodcut here */}
                <div className=" px-2 mt-1">
                    <GridProduct />
                    
                </div>
            </div>

        </div>
        
        </>
    )
}

export default ShopPage;