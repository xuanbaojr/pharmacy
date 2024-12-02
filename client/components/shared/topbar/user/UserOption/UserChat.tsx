import { IoPersonCircleOutline } from "react-icons/io5";
interface Props {
    type : "left" | "right",
    title : string
}

const UserChat = ({type, title} : Props) => {

    return (
        <div className={`flex gap-2 items-start ${type == "right" ? "flex-row-reverse": ""}`}>
            <div className="flex items-center justify-center py-1">
                <IoPersonCircleOutline size={30} color="gray"/>
            </div>
            <div className=" rounded-lg px-2 py-1 max-w-52 bg-gray-200">
                {title}
            </div>

        </div>
    )
}


export default UserChat