"use client";   
import React, { useState, useEffect } from 'react';
import { IoPersonOutline, IoHeartOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '@/hooks/AuthContext';
import Link from 'next/link';

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
            <IoPersonOutline size={24} onClick={handleIconClick} />
            {isModalVisible && (
                <div className="absolute top-full mt-2 p-2 bg-gray-200 rounded shadow-lg z-50">
                    {isAuthenticated ? (
                        <>
                            <div>{username}</div>
                            <button onClick={handleLogout}>Log Out</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => window.location.href = '/login'}>Đăng nhập</button>
                            <button onClick={() => window.location.href = '/register'}>Đăng ký</button>
                        </>
                    )}
                </div>
            )}
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
                <IoHeartOutline size={24} />
            </Link>
        ),
        link: "/",
    },
    {
        icon: (
            <Link href="/cart">
                <FiShoppingCart size={24} />
            </Link>
        ),
        link: "/cart",
    }
];