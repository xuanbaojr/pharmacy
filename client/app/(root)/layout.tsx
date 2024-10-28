import { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "@/components/shared/topbar/Topbar";
import "../globals.css";
import BottomBar from "@/components/shared/bottom/BottomBar";
import { AuthProvider } from '@/hooks/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Pharmacy web',
    description: 'A Next.js 13 Meta Threads Application',
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-white`}>
                <AuthProvider>
                    <div className="w-full">
                        <TopBar />
                    </div>
                    {children}
                    <ToastContainer />
                    <div>
                        <BottomBar />
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;