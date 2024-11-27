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

export interface UserItem {
    icon: React.ReactNode;
    link: string;
}

const UserIconWithClick = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { isAuthenticated, token, logout } = useAuth();
    const [userName, setUsername] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserName = localStorage.getItem('Username');
            setUsername(storedUserName || "");
        }
    }, []);
    const username = token ? userName : "";

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
                
                    {isAuthenticated ? (
                        <>
                            <DropdownMenuLabel className='w-full flex bg-gray-200'>{username}</DropdownMenuLabel>
                            <DropdownMenuLabel className='hover:bg-gray-100 w-full' onClick={handleLogout}>Rời khỏi</DropdownMenuLabel>
                        </>
                    ) : (
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

export const UserContants: UserItem[] = [
    {
        icon: <UserIconWithClick />,
        link: "#"
    },
    {
        icon: (
            <Link href="/">
                <IoHeartOutline className='hover:shadow-2xl rounded-lg' size={24} />
            </Link>
        ),
        link: "/",
    },
    {
        icon: (
            <Link href="/cart">
                <FiShoppingCart className='hover:shadow-2xl rounded-lg' size={24} />
            </Link>
        ),
        link: "/cart",
    }
];