import TopBar from "@/components/shared/topbar/Topbar";
import BottomBar from "@/components/shared/bottom/BottomBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
    return (
        <>
            <div className="w-full">
                <TopBar />
            </div>
            <ToastContainer />

            {children}
            <div>
                <BottomBar />
            </div>
        </>
    );
};

export default RootLayout;