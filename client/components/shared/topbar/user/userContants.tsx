"use client";   
import React, { useState } from 'react';
import { IoPersonOutline, IoHeartOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';

export interface UserItem {
    icon: React.ReactNode;
    link: string;
}

const UserIconWithHover = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login status
    const username = "User Name"; 

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            className="relative inline-block mt-1"
        >
            <IoPersonOutline size={24} />
            {isHovered && (
                <div className="absolute top-full mt-2 p-2 bg-gray-200 rounded shadow-lg z-50">
                    {isLoggedIn ? username : "Đăng nhập"}
                </div>
            )}
        </div>
    );
};

export const UserContants: UserItem[] = [
    {
        icon: <UserIconWithHover />,
        link: "/login",
    },
    {
        icon: <IoHeartOutline size={24} />,
        link: "/",
    },
    {
        icon: <FiShoppingCart size={24} />,
        link: "/cart",
    }
];