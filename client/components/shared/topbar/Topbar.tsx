import { MenuContants } from "@/components/shared/topbar/menu/MenuContants";
import Logo from "../../card/logo";
import MenuForm from "./menu/MenuForm";
import SearchTop from "../../card/Search";
import UserForm from "./user/UserForm";
import { UserContants } from "@/components/shared/topbar/user/userContants";

interface Props {

}

const TopBar = () => {

    return (
        <>
        <div className="flex justify-between bg-white rounded-lg mx-4 mt-2 py-2 px-10 border ">
            <div className="flex justify-between gap-10 ">
                <Logo />
                <div className="flex">
                    <MenuForm menu={MenuContants}/>
                </div>
            </div>
            <div className="flex justify-end gap-7">
                {/* <SearchTop /> */}
                <UserForm user={UserContants}/>

            </div>
            
        </div>
        
        </>
    )
}

export default TopBar;