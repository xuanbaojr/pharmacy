import { ListOptionSelect } from "./Option"

interface Props {

}

const SideBar = () => {

    return (
        <>
        <div className="w-full bg-slate-300 mr-4 px-2 py-1 rounded-lg">
            {
                ListOptionSelect.map((item, index) => {
                    return (
                        <div key={index} className="my-4 ">
                            {item.option("ad")}
                        </div>
                    )
                })
            }
        </div>
        
        </>
    )
}

export default SideBar