import { Location } from "@/app/(root)/(user)/shop/[id]/page"
import { mainWindow } from "@/app/layout"

interface Props {
    user : Location
}


const SideBar = ({user} : Props) => {
    mainWindow.updateParams(user)

    return (
        <>
        <div className="w-full mr-4 px-2 rounded-lg bg-gray-200  shadow-sm">
            {mainWindow.getSideBar().map((item, index) => {
                if (item.getIsRun() === true) {
                    return (
                    <div key={index} className=" ">
                        {item.getDes()}
                    </div>
                    )
                } return <></>
                
            })}
        </div>
        
        </>
    )
}

export default SideBar