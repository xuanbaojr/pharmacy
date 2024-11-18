import { Button } from "@/components/ui/button"
import CardProduct from "./CardProduct"
import { Pharmacy } from "./DataProduct"
import { convertPharmacyList, pharmacy } from "./DataProduct"
import { getMedicine } from "@/api/medicine"

interface Props {

}

const GridProduct = async () =>  {
    
    const res : any = await getMedicine();
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
        </div>
        
        </>
    )
}

export default GridProduct