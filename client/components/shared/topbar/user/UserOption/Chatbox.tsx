'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { IoMdSend } from "react-icons/io";
import UserChat from "./UserChat";
import { useEffect, useRef, useState } from 'react';
import { DataChat, listChat } from "./DataChat";
import { getChatbot } from "@/api/medicine";
import { Ellipsis } from "lucide-react";
interface Props {

}


const ChatBox = () => {
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const [messages, setMessages] = useState<DataChat[]>(listChat);
    const [inputValue, setInputValue] = useState<string>('');
    const [load, setLoad] = useState(true);

    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const addMessage = async() => {
        if (inputValue.trim() !== '') {
            
            const newMes : DataChat = {
                type : "right",
                title: inputValue
            }
            setMessages((prevMessages) => [...prevMessages, newMes]);
            setLoad(false)
            const respone : any = await getChatbot(inputValue);
            const res : DataChat = {
                type: 'left',
                title : respone.answer
            }
            console.log(respone)
            setMessages((prevMessages) => [...prevMessages, res]);
            setLoad(true)
            setInputValue(''); // Xóa input sau khi gửi
        }
      };
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };

      const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          addMessage();
        }
      };
    
    return (
        <div className='w-80 h-96 bg-white fixed bottom-4 right-8 z-30 border border-gray-200 shadow-xl flex flex-col rounded-lg '>
            <div className="border-b flex-none h-10 border-gray-200 py-2 px-3 shadow-xl">
                Chat với AI
            </div>
            <div className=" flex-1 flex overflow-y-scroll  " ref={chatContainerRef}>
                <div className=" space-y-3  w-full h-full px-2 ">
                    {
                        messages.map((item, index) => {
                            return (
                                <UserChat type={item.type} title={item.title} key={index} />
                            )
                        })
                    }
                    {
                        !load && 
                        <div className="px-4 ">
                            <Ellipsis color="gray" size={30}/>
                        </div>
                    }
                
                </div>
            </div>
            <div className="px-1 py-1 flex-none  flex justify-between items-center border-t border-gray-200 shadow-xl">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="flex-1 rounded-full h-8 ml-1 px-2 focus-within:border-0"
                    placeholder="Nhập tin nhắn..."
                />
                <Button  onClick={addMessage} onKeyDown={addMessage} className="p-2">
                    <IoMdSend className="text-blue-800" size={20}/>
                </Button>
            </div>
        </div>
    )
}

export default ChatBox