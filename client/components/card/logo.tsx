import Image from "next/image";
import logo from '@/public/assets/pr/logo.png'
import Link from "next/link";

interface Props {

}

const Logo = () => {
    return (

        <>
            <Link href={"/"} className="flex  items-center gap-4">
                <Image src={logo} alt="logo"  className=" object-cover h-16 w-full" />
            </Link>
            
        </>
    )
}

export default Logo;