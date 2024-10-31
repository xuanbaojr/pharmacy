import { mainWindow } from "@/manager/MainWindow"

interface Props {

}

const a = mainWindow.getLenght()

const SideBar = () => {

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