import { mainWindow } from "@/manager/MainWindow"


interface Props {

}

const RightBar = () => {

    return (
        <>
        <div className="w-full  px-2 py-1 rounded-lg">
        {
            mainWindow.getRightBar().map((item, index) => {
                return (
                    <div key={index} className="my-4 ">
                        {item.getDes()}
                    </div>
                )
            })
        }
        {
            mainWindow.getLeR()
        }
        </div>
        </>
    )
}

export default RightBar