"use client";   
import React, { useState, useEffect } from 'react';
import { IoPersonOutline, IoHeartOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '@/hooks/AuthContext';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaFacebookMessenger } from "react-icons/fa6";
import ChatBox from './UserOption/Chatbox';
import { MdLocalShipping } from "react-icons/md";
import { useRouter } from 'next/navigation';
export interface UserItem {
    icon: React.ReactNode;
    link: string;
}

const UserIconWithClick = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { isAuthenticated, token, logout } = useAuth();
    const [userName, setUsername] = useState("");
    const [role, setRole] = useState("");
    const router = useRouter()

    const shipperRouter = () => {
        router.push("/ship")
    }
    const adminRouter = () => {
        router.push('/recep')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserName = localStorage.getItem('Username');
            setUsername(storedUserName || "");
        }
    }, []);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedRole = localStorage.getItem('Role');
            setRole(storedRole || "");
        }
    }, []);
    const username = token ? userName : "";
    const roleUser = token ? role : "";
    const handleIconClick = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleLogout = () => {
        logout();
        setIsModalVisible(false);
    };

    return (
        <div className="relative inline-block cursor-pointer">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='p-0 '>
                    {isAuthenticated ? 
                        (
                            <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <IoPersonOutline size={24}/>
                        )
                    }
                    
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border border-gray-300 bg-white p-0 rounded-xl overflow-hidden">
                
                    {isAuthenticated && roleUser === "Admin" ? (
                        <>
                            <DropdownMenuLabel className='w-full flex bg-gray-200 cursor-pointer' >{username}</DropdownMenuLabel>
                            <DropdownMenuLabel className='hover:bg-gray-100 w-full cursor-pointer' onClick={handleLogout}>Rời khỏi</DropdownMenuLabel>
                            <DropdownMenuLabel className='hover:bg-gray-100 w-full cursor-pointer' onClick={adminRouter}>Điều hành</DropdownMenuLabel>
                        </>
                    ) :
                    isAuthenticated && roleUser === "Shipper" ? (
                        <>
                            <DropdownMenuLabel className='w-full flex bg-gray-200 cursor-pointer' >{username}</DropdownMenuLabel>
                            <DropdownMenuLabel className='hover:bg-gray-100 w-full cursor-pointer' onClick={handleLogout}>Rời khỏi</DropdownMenuLabel>
                            <DropdownMenuLabel className='hover:bg-gray-100 w-full cursor-pointer' onClick={shipperRouter}>Vận chuyển</DropdownMenuLabel>
                        </>
                    ) :
                    (
                        <>
                            <DropdownMenuLabel className='hover:bg-gray-100 w-full' onClick={() => window.location.href = '/login'}>Đăng nhập</DropdownMenuLabel>
                            <DropdownMenuLabel className='hover:bg-gray-100 w-full' onClick={() => window.location.href = '/register'}>Đăng ký</DropdownMenuLabel>
                        </>
                    )}
                
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

const ChatIcon = () => {
    const [open, setOpen] = useState(false)

    const handleChange = (change : boolean) => {
        setOpen(change)
    }

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div  className='relative inline-block cursor-pointer '>
            <Button onClick={handleOpen} className='p-0 '>
                <FaFacebookMessenger size={24}/>
            </Button>
            
            {
                open && 
                <ChatBox change={handleChange}/>
            }
        </div>
    )
}

export const UserContants: UserItem[] = [
    {
        icon : <Link href="/follow">
                    <MdLocalShipping className='hover:col rounded-lg' size={28} />
                </Link>,
        link : "#"
    },
    {
        icon : <ChatIcon/>,
        link : "#"
    },
    {
        icon: (
            <Link href="/whitlist">
                <IoHeartOutline className='hover:shadow-2xl rounded-lg' size={24} />
            </Link>
        ),
        link: "/whitlist",
    },
    {
        icon: (
            <Link href="/cart">
                <FiShoppingCart className='hover:shadow-2xl rounded-lg' size={24} />
            </Link>
        ),
        link: "/cart",
    },
    {
        icon: <UserIconWithClick />,
        link: "#"
    },
];