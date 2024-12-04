"use client";  
import { UserItem } from "@/components/shared/topbar/user/userContants";

interface Props {
    item : UserItem;
}

const UserItemLink = ({item} : Props) => {
    return (
        <div className="flex items-center justify-center">
            {item.icon}
        </div>
    )
}

export default UserItemLink;