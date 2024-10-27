
import { MenuItem } from "@/components/shared/topbar/menu/MenuContants";
import Link from "next/link";

interface Props {
    item : MenuItem;
    active : boolean;
}

const MenuItemLink = ({item, active} : Props) => {
    return (
        <>
        <div className="flex items-center justify-center">
            <Link href={item.link} className={ `${!active ? "text-black" : "text-blue-500"} text-xl`}>
                {item.label}
            </Link>

        </div>
        </>
    )
}

export default MenuItemLink;