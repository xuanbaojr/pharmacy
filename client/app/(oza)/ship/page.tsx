import { listOrders } from "@/components/shared/CartList/CartType"
import {TableColumns } from "@/components/shared/TableMagic/Colums"
import { data } from "@/components/shared/TableMagic/Data"
import TableMagic from "@/components/shared/TableMagic/TableMagic"


interface Props {

}

const ShipPage =   () => {
    // const listOrder = await fetchListOrderOfUser(user.id)

    // const orders = passOrderToClient(listOrder, "")
    const orders = listOrders
    return (
        <div className="px-32 ">
            <TableMagic 
                listOrder={data}
                columns={TableColumns}
            />
            
        </div>
    )
}


export default ShipPage