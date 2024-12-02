import { Location } from "@/app/(root)/(user)/shop/[id]/page"
import { mainWindow } from "@/app/layout"

interface Props {
    user : Location
}


const SideBar = ({user} : Props) => {
    mainWindow.updateParams(user)

    return (
        <>
        <div className="w-full  mr-4 px-2 py-1 rounded-lg bg-gray-200 border border-gray-300 shadow-sm">
            {mainWindow.getSideBar().map((item, index) => {
                return (
                    <div key={index} className="my-4 ">
                        {item.getDes()}
                    </div>
                )
            })}
        </div>
        
        </>
    )
}

export default SideBar