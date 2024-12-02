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
        <div className="px-32 mt-4 ">
            <div className="w-full bg-white py-2 space-y-2">
            <TableMagic 
                listOrder={data}
                columns={TableColumns}
            />
            </div>
        </div>
    )
}


export default ShipPage