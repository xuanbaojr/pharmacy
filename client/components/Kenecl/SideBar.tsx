import { mainWindow } from "@/app/layout"
import instance from "@/utils/axios"

interface Props {

}


const SideBar = () => {

    const getcheck =  async ()=> {
        const data = await instance.get(`/api/RMD01`)
        console.log(data.data.map((item : any) => 
            item.id + " " + item.name
        ))
    }

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