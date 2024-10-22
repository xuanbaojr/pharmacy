import { IoPersonOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
export interface UserItem {
    icon : React.ReactNode,
    link : string,

}

export const UserContants : UserItem[] = [
    {
        icon : <IoPersonOutline size={24}/>,
        link : "/",
    },
    {
        icon : <IoHeartOutline size={24}/>,
        link : "/",
    },
    {
        icon : <FiShoppingCart size={24}/>,
        link : "/cart",
    }
]