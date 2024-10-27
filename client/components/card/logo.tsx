import Image from "next/image";
import logo from '@/assets/image/logo.png'
import Link from "next/link";

interface Props {

}

const Logo = () => {
    return (

        <>
            <Link href={"/"} className="flex items-center gap-4">
                <Image src={logo} alt="logo" width={200}  />
            </Link>
            
        </>
    )
}

export default Logo;