import { mainWindow } from "@/app/layout"


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
        </div>
        </>
    )
}

export default RightBar