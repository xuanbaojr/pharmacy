import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface SelectStatusBox {
    title : string,
    parentPoint : string | null,
    workPlace : string,
    // status : Status,
  }

interface Props {
    table : any,
    select : SelectStatusBox,
}



const SelectBox = ({table, select}: Props) => {
    const router = useRouter()

    const pass  = async () => {

        router.refresh()
    }
    const CheckAddress = (address : string) => {
        if(address === select.workPlace) {
            return true
        }
        else return false
    }


    return (
        <>
        <div className="flex items-center justify-end space-x-2 py-4 ">
            <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} Trên{" "}
                {table.getFilteredRowModel().rows.length} hàng 
            </div>

            <div>
                <Button onClick={()=> pass()}
                disabled={table.getFilteredSelectedRowModel().rows.length === 0}
                className="space-x-2"
                >
                    Hoàn Tất
                </Button>
            </div>
        </div>
        
        </>
    )
}

export default SelectBox;