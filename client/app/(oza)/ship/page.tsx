import { listOrders } from "@/components/shared/CartList/CartType"
import { PharmacyColumns } from "@/components/shared/TableMagic/Colums/PhamacyColums"
import TableMagic from "@/components/shared/TableMagic/TableMagic"


interface Props {

}

const ShipPage =   () => {
    // const listOrder = await fetchListOrderOfUser(user.id)

    // const orders = passOrderToClient(listOrder, "")
    const orders = listOrders
    return (
        <div>
            
            <TableMagic
            listOrder={orders} 
            columns={PharmacyColumns}
            // searchColumns={null}
            // dropMenu={null}
            selectBox={null}
            />
        </div>
    )
}


export default ShipPage