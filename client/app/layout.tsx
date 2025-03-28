import { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "@/components/shared/topbar/Topbar";
import "./globals.css";
import BottomBar from "@/components/shared/bottom/BottomBar";
import { AuthProvider } from '@/hooks/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainManager from "@/manager/MainManager";
import { MainWindow} from "@/manager/MainWindow";
import LoadRPlugin from "@/manager/LoadRPlugin";

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Pharmacy web',
    description: 'A Next.js 13 Meta Threads Application',
};


const inter = Inter({ subsets: ["latin"] });

export const mainWindow = new MainWindow([], [])

const pluginsidebar : string = 'D:/BTL-Pharmacy/pharmacy/client/Plugin/sidebar'; // Đường dẫn đến thư mục chứa các plugin
const pluginrightbar : string = 'D:/BTL-Pharmacy/pharmacy/client/Plugin/rightbar'; // Đường dẫn đến thư mục chứa các plugin

const sideBar = MainManager(pluginsidebar);
const rightBar = LoadRPlugin(pluginrightbar)

mainWindow.loadPlugin(sideBar, rightBar)

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#F7F7F7]`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;