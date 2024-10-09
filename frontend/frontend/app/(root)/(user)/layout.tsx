import { PrImage } from "@/components/from/Toppr/PrImage";
import PrSlide from "@/components/from/Toppr/PrSlide";

interface Props {
    children : React.ReactNode;
}

const UserLayout = ({children}: Props) => {

    return (
        <>
        <div className="w-full ">
            <div className="w-full px-10 flex justify-center mt-2 ">
                <PrSlide pr={PrImage}/>
            </div>
            <div className="w-full mt-2">
                {children}
            </div>
            
            
        </div>
        
        </>
    )
}

export default UserLayout;