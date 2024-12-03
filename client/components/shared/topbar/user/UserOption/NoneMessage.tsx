import { IoPersonCircleOutline } from "react-icons/io5";

const NoneMessage = () => {

    return (
        <div className=" h-48 w-full flex justify-center items-center ">
            <div className=" flex flex-col items-center gap-5  justify-center">
                
                <IoPersonCircleOutline size={50} color="gray"/>
                <div className=" line-clamp-2 text-wrap text-base">
                    Chat với AI thông minh
                </div>
            </div>

        </div>
    )
}

export default NoneMessage