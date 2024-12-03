import TopBar from "@/components/Kenecl/Topbar";
import SideBar from "@/components/Kenecl/SideBar";
import GridProduct from "@/components/card/product/GridProduct";
import { Location } from "./[id]/page";



const ShopPage = () => {
    const user : Location = {}
    return (
        <>
        <div className="flex gap-5 mt-3 px-10 rounded-lg">
            <div className="w-1/6">
                <SideBar user={user}/>
            </div>
            <div className="w-5/6">
                <div>
                    {/* <TopBar
                    page={user.page ? user.page : 1}
                    min={user.min? user.min : null}
                    max= {user.max? user.max : null}
                    category={user.searchName ? user.searchName: null}
                    /> */}
                </div>
                {/* prodcut here */}
                <div className=" px-2 mt-1">
                    <GridProduct 
                    page={user.page ? user.page : 1}
                    min={user.min? user.min : null}
                    max= {user.max? user.max : null}
                    category={user.searchName ? user.searchName: null}
                    />
                </div>
            </div>

        </div>
        
        </>
        )
    } 

export default ShopPage;