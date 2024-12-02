'use client'

import { useState } from "react";
import { FaCamera } from "react-icons/fa"

interface Props {
    file : any | null
    setFile : (file : any ) => void
    keyDown : (event : React.KeyboardEvent<HTMLInputElement>) => void
}


const ChatImage = ({file, setFile, keyDown } : Props) => {
    const [load, setLoad] = useState(true);

    const handleFileChange = (event : any) => {
      setFile(event.target.files[0]);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Kiểm tra xem phím nhấn có phải là Enter không
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định
            keyDown(event)
        }
    };

    return (
        <div className="p-1 relative text-gray-400">
            <input type="file" 
                className=" opacity-0 absolute w-full h-full " accept="image/png" 
                onChange={handleFileChange}
                onKeyDown={handleKeyDown}
            />
           <FaCamera />  

        </div>
    )
}

export default ChatImage