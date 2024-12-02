import CardProduct from "./CardProduct"
import { convertPharmacyList, pharmacy } from "./DataProduct"
import { getMedicine, getMedicineAISearch } from "@/api/medicine"
import PaginationProduct from "./PaginationProduct"

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
    const newdata : pharmacy[] = convertPharmacyList(res.data.data);
    
    return (
        <>
        <div className="w-full p-2 ">
            <div className="grid grid-cols-5 gap-3"> 
                
                {
                    newdata.map((item,index) => {
                        return (
                            <CardProduct key={index} pharmacy={item} />
                        )
                    })
                }
            </div>
            <div className=" w-full flex justify-center items-center my-4">
            <PaginationProduct 
            page={page}
            category={category}
            min={min}
            max={max}

            />
            </div>
      
        </div>
        
        </>
    )
}

export default GridProduct