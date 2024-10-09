import { Metadata } from "next";
import { Children } from "react";
import { Inter } from "next/font/google";
import TopBar from "@/components/shared/topbar/Topbar";
import "../globals.css"

interface Props {
    children : React.ReactNode;
}
export const metadata : Metadata = {
    title: 'Pharmacy web',
    description: 'A Next.js 13 Meta Threads Application',
}
const inter = Inter({subsets:["latin"]})

const RootLayout = ({children}: Props) => {

    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#F5F5F5]`}>
                <div className="w-full">
                    <TopBar />
                </div>
                    {children}
            </body>
        </html>
    )
}

export default RootLayout;