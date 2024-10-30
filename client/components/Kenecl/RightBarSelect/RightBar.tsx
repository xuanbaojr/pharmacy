import { ListOptionSelect } from "./Option"


interface Props {

}

const RightBar = () => {

    return (
        <>
        <div className="w-full  px-2 py-1 rounded-lg">
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

export default RightBar