
import instance from "@/utils/axios"
import CardProduct from "./CardProduct"
import { convertPharmacyList, pharmacy } from "./DataProduct"

interface Props {

}

const GridProduct = async() => {
    const data  = await instance.get(`/api/RMD01`)
    const newdata : pharmacy[] = convertPharmacyList(data.data);

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