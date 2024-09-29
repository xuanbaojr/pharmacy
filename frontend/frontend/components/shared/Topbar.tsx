import { MenuContants } from "@/contants/MenuContants";
import Logo from "../card/logo";
import MenuForm from "../from/menu/MenuForm";
import SearchTop from "../card/Search";
import UserForm from "../from/user/UserForm";
import { UserContants } from "@/contants/userContants";

interface Props {

}

const TopBar = () => {

    return (
        <>
        <div className="flex justify-between  rounded-lg mx-4 mt-2 py-2 px-10 border ">
            <div className="flex justify-between gap-10 ">
                <Logo />
                <div className="flex">
                    <MenuForm menu={MenuContants}/>
                </div>
            </div>
            <div className="flex justify-end gap-7">
                <SearchTop />
                <UserForm user={UserContants}/>

            </div>
            
        </div>
        
        </>
    )
}

export default TopBar;