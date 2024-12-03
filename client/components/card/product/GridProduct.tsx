import CardProduct from "./CardProduct"
import { convertPharmacyList, pharmacy } from "./DataProduct"
import { getMedicine, getMedicineAISearch } from "@/api/medicine"
import PaginationProduct from "./PaginationProduct"
import NoneProduct from "./NoneProduct"

interface Props {
    // sort: string
    aiSearch? : string ,
    page : number,
    min : number | null,
    max : number | null,
    category : string | null
}


const GridProduct = async ({aiSearch, page, min, max, category} : Props ) =>  {
    
    const res : any = aiSearch? await getMedicineAISearch(page,aiSearch) :  await getMedicine(page, min, max , category )

<<<<<<< HEAD
 
    const res : any = aiSearch? await getMedicineAISearch(page,aiSearch) :  await getMedicine(page, min, max , category )
=======
>>>>>>> frontend/quyen
    const newdata : pharmacy[] = convertPharmacyList(res.data.data);
    // const newdata : any[] = []
    
    return (
        <>
        <div className="w-full p-2 ">
            
                
            {
                newdata.length === 0? 
                <NoneProduct />
                :<div className="grid grid-cols-5 gap-3"> 
                {
                    newdata.map((item,index) => {
                        return (
                            <CardProduct key={index} pharmacy={item} />
                        )
                    })}
                </div>
            }
            
            <div className=" w-full flex justify-center items-center my-4">
            <PaginationProduct 
                page={page}
                category={category}
                min={min}
                max={max}
                aiSearch={aiSearch}
                pageSize={newdata[0].totalPage}
            />
            </div>
      
        </div>
        
        </>
    )
}

export default GridProduct