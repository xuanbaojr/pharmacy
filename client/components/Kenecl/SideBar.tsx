'use client'
import { mainWindow } from "@/manager/MainWindow"
import { Button } from "../ui/button"
import instance from "@/utils/axios"

interface Props {

}

const a = mainWindow.getLenght()

const SideBar = () => {

    const getcheck =  async ()=> {
        const data = await instance.get(`/api/RMD01`)
        console.log(data.data.map((item : any) => 
            item.id + " " + item.name
        ))
       
    }

    return (
        <>
        <div className="w-full  mr-4 px-2 py-1 rounded-lg">
            {mainWindow.getSideBar().map((item, index) => {
                return (
                    <div key={index} className="my-4 ">
                        {item.getDes()}
                    </div>
                )
            })}
            {
                a
            }
            
        </div>
        
        </>
    )
}

export default SideBar