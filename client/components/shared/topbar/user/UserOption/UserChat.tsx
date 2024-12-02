import { IoPersonCircleOutline } from "react-icons/io5";
interface Props {
    type : "left" | "right",
    title : string
    image : React.ReactNode | null
}

const UserChat = ({type, title, image} : Props) => {

    return (
        <div className={`flex gap-2 items-start my-2 ${type == "right" ? "flex-row-reverse": ""}`}>
            <div className="flex items-center justify-center py-1">
                <IoPersonCircleOutline size={30} color="gray"/>
            </div>
            {
                image === null ?  <div className={` rounded-lg px-2 py-1 max-w-52 ${type == "right" ? "bg-blue-500 text-white": "bg-gray-200 text-black"}`}>
                {title}
            </div> : <>
                {image}
            </>
            }
            

        </div>
    )
}


export default UserChat