import logo from "@/assets/image/logo.png"
import Image from "next/image";

interface Props {

}

const Upload = () => {

    return (
        <>
        <div className="bg-white flex justify-center items-center">
            <Image src={logo} alt="asdas" />
        </div>
        
        </>
    )
}

export default Upload;