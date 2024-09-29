import SideBar from "@/components/from/SideBarSelect/SideBar";
import TopBar from "@/components/from/TopbarSelect/Topbar";


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
                <div>

                </div>
            </div>

        </div>
        
        </>
    )
}

export default ShopPage;