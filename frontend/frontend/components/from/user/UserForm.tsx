import { UserItem } from "@/contants/userContants";
import UserItemLink from "./UserItem";

interface Props {
    user : UserItem[];
}

const UserForm = ({user} : Props) => {
    return (
        <>
        <div className="flex justify-evenly gap-7">
            {
                user.map((item) => {
                    return (
                        <UserItemLink key={item.link} item={item} />
                    )
                })
            }

        </div>
        </>
    )
}

export default UserForm;