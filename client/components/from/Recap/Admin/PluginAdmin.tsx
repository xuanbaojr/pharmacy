'use server'
import { mainWindow } from "@/app/layout"
import { IPlugin } from "@/manager/plugin/IPlugin"
import PluginItem from "./PluginItem"

export const change = async (run : boolean, name :string) => {
    const plugin : IPlugin = mainWindow.getIPlugin(name)
    plugin.setIsRun(run)
}

const PluginAdmin = () => {


    return (
        <div className=" mx-2 my-2 border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-5 py-2 text-white bg-gray-800 text-xl font-bold">
                Các phương thức lọc sản phẩm
            </div>
            {
                mainWindow.getSideBar().map((item : IPlugin, index :number) => {
                    

                    return (
                        <PluginItem key={index} name={item.getName()} isRun={item.getIsRun()} />
                    )
                })
            }

        </div>
    )
}


export default PluginAdmin