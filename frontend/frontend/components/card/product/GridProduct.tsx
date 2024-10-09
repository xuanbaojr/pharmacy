import CardProduct from "./CardProduct"
import { Pharmacy } from "./DataProduct"

interface Props {

}

const GridProduct = () => {

    return (
        <>
        <div className="w-full p-2 ">
            <div className="grid grid-cols-5 gap-5"> 
                {
                    Pharmacy.map((item,index) => {
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