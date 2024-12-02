import TopBar from "@/components/Kenecl/Topbar";
import SideBar from "@/components/Kenecl/SideBar";
import GridProduct from "@/components/card/product/GridProduct";


export interface Location {
    searchName? : string,
    min? : number ,
    max? : number,
    page? : number,
}

const ShopPage = ({ params }: { params: { id: string } }) => {
    if(params.id !== '') {
        const user : Location = JSON.parse(decodeURIComponent(params.id));

    return (
        <>
        <div className="flex gap-5 mt-3 px-10 rounded-lg">
            <div className="w-1/6">
                <SideBar user={user}/>
            </div>
            <div className="w-5/6">
                <div>
                    <TopBar 
                    page={user.page ? user.page : 1}
                    min={user.min? user.min : null}
                    max= {user.max? user.max : null}
                    category={user.searchName ? user.searchName: null}
                    />
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
}

export default ShopPage;