'use client'
import { MenuItem } from "@/components/shared/topbar/menu/MenuContants";
import { usePathname } from "next/navigation";
import MenuItemLink from "./MenuItem";

interface Props {
    menu : MenuItem[]
}

const MenuForm = ({menu} : Props) => {
    const pathname = usePathname();
    return (
        <>
        <div className="flex items-center gap-6 ">
            {
                menu.map((item) => {
                    
                    if(pathname !== "/" && item.link === "/") {
                        const isActive = false;
                        return (
                            <MenuItemLink key={item.label} item={item} active={isActive} />
                        )
                    } else {
                        const isActive = pathname.includes(item.link)
                        return (
                            <MenuItemLink key={item.label} item={item} active={isActive} />
                        )
                    }
                    
                })
            }

        </div>
        
        </>
    )
}

export default MenuForm;