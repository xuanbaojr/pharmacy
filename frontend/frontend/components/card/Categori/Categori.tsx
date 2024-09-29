import Link from "next/link"
import { CategoriItem } from "./ItemCategori"

interface Props {
    categoriItem : CategoriItem
}

const Categori = ({categoriItem} : Props) => {

    return (
        <>
        <div className="flex justify-center">
            <div className="flex-col justify-center items-center hover:text-[#1364FF] font-medium">

                <Link href={categoriItem.link}>
                <div className="flex justify-center items-center">
                    <div className="bg-[#E8F3FF] p-6  rounded-full flex items-center justify-center">
                        {categoriItem.icon (28, "#1364FF")}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center mt-2 w-2/3 text-center ">
                    {categoriItem.name}
                    </div>
                </div>
                </Link>

            </div>
        </div>
        </>
    )
}

export default Categori