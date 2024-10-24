import { Pharmacy } from "@/components/card/product/DataProduct"
import CartContain from "@/components/shared/CartList/CartContain"
import { listOrder } from "@/components/shared/CartList/type"
import { PharmacyColumns } from "@/components/shared/TableMagic/Colums/PhamacyColums"
import TableMagic from "@/components/shared/TableMagic/TableMagic"


interface Props {


}

const CartPage = () => {

   

    return (
        <div className="mx-32 px-4 my-5 ">
            <CartContain cart={listOrder}/>
        </div>
    )
}

export default CartPage