import { UserItem } from "@/contants/userContants";
import Link from "next/link";

interface Props {
    item : UserItem;
}

const UserItemLink = ({item} : Props) => {
    return (
        <>
        <div className="flex items-center justify-center">
            <Link href={item.link} >
                {item.icon}
            </Link>

        </div>
        </>
    )
}

export default UserItemLink;

