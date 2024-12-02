'use client'
import { Button } from "@/components/ui/button";
import { IoMdSend } from "react-icons/io";
import UserChat from "./UserChat";
import { useEffect, useRef, useState } from 'react';
import { DataChat, ImageChat, listChat } from "./DataChat";
// import { getChatbot } from "@/api/medicine";
import { Ellipsis } from "lucide-react";
import { chatMessageAI } from "@/api/chatbox";
import { TbXboxX } from "react-icons/tb";
import ChatImage from "./ChatImage";
import Image from "next/image";
interface Props {
    change : (change : boolean) => void
}

const ChatBox = ({change} : Props) => {
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const [messages, setMessages] = useState<DataChat[]>(listChat);
    const [inputValue, setInputValue] = useState<string>('');
    const [load, setLoad] = useState(true);
    const [file, setFile] = useState(null);

    const handleUp = (file : any) => {
        setFile(file)
    }

    const handleDown = () => {
        setFile(null)
    }

    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    useEffect(() => {
        scrollToBottom();
      }, [file]);

    const addMessage = async() => {
        if (inputValue.trim() !== '') {
            const newMes : DataChat = {
                type : "right",
                title: inputValue,
                image : null
            }
            setInputValue(''); // Xóa input sau khi gửi
            setMessages((prevMessages) => [...prevMessages, newMes]);
            setLoad(false)
            const respone : any = await chatMessageAI(inputValue);
            const res : DataChat = {
                type: 'left',
                title : respone.data.answer,
                image : null
            }
            console.log(res)
            setMessages((prevMessages) => [...prevMessages, res]);
            setLoad(true)
        }

        if (file !== null) {
            const newMes : DataChat = {
                type : "right",
                title: '',
                image : <ImageChat file={file} />
            }
            handleDown()
            setMessages((prevMessages) => [...prevMessages, newMes]);

            
            
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
        <div className='w-80 bg-white fixed bottom-2 right-8 z-30 border border-gray-300 shadow-xl flex flex-col rounded-lg overflow-hidden'>
            <div className="border-b w-full flex-none flex justify-between items-center h-10 border-gray-200 py-2 px-1 shadow-xl bg-blue-600">
                <div className="ml-2 text-white">
                    Chat với AI
                </div>
                {/* option */}
                <div className="flex justify-center gap-2 items-center">
                    <Button onClick={() => change(false)}>
                        <TbXboxX size={20} color="white"/>
                    </Button>
                </div>
                
            </div>
            <div className="  h-96 flex overflow-y-scroll  " ref={chatContainerRef}>
                <div className=" w-full h-full px-2 ">
                    {
                        messages.map((item, index) => {
                            return (
                                <UserChat type={item.type} title={item.title} image={item.image} key={index} />
                            )
                        })
                    }
                    {
                        !load && 
                        <div className="px-4 ">
                            <Ellipsis color="gray" size={30}/>
                        </div>
                    }
                    {file && 
                        <div className="py-2 px-2 flex justify-start bg-gray-200 border shadow-sm h-20">
                            <div className="h-full relative">
                                <div className=" absolute -top-2 -right-2 p-0 border" onClick={handleDown}>
                                    <TbXboxX />
                                </div>
                                <Image src={URL.createObjectURL(file)} width={50} height={50} className="object-cover h-full border" alt="as"/>
                            </div>
                        </div>
                    }
                
                </div>
            </div>
            <div className="px-1 py-1 flex-none  flex justify-between items-center border-t border-gray-200 shadow-xl">
                <ChatImage 
                    file={file}
                    setFile={handleUp}
                    keyDown={handleKeyPress}
                />
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