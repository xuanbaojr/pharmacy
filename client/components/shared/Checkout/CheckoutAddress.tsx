'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
    name : string ,
    setName : (name : string ) => void,
    address : string,
    setAddress : (address : string) => void
    phone : string,
    setPhone: (phone : string) => void
    note : string,
    setNote : (note : string) => void
}

const CheckoutAddress = ({address, setAddress, phone, setPhone, note, setNote, name , setName} : Props) => {
    const [change, setChange] = useState(false)

    const handleOke = () => {
        setChange(false)
    }

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };
    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleOke();
        }
    };

    return (
        <div className="flex flex-col gap-3 px-4 py-2 rounded-md bg-white border border-gray-200 shadow-sm">
            <div className=" text-xl font-semibold text-[#0076C0] flex items-center gap-4">
                <FaLocationDot />
                Thông tin người nhận
            </div>
            
                
                { change ? 
                <div className="grid grid-cols-10 gap-2">
                    <div className=" col-span-2 flex  ">
                        <div className="text-base font-semibold">
                            {/* <span>{name}</span> */}
                        </div>
                    </div>
                    <div className="flex col-span-6 text-center flex-col items-start">
                        <div className="flex gap-4 px-2 justify-start items-center">
                            <div className=" min-w-32 text-left text-base font-bold">Tên người nhận : </div>
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                onKeyPress={handleKeyPress}
                                className="flex-1 rounded-lg ml-1 px-2 py-3 focus-within:border-0"
                                placeholder="Nhập địa chỉ..."
                            />
                        </div>
                        <div className="flex gap-4 px-2 justify-start items-center">
                            <div className=" min-w-32 text-left text-base font-bold">Địa chỉ : </div>
                            <input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                onKeyPress={handleKeyPress}
                                className="flex-1 rounded-lg ml-1 px-2 py-3 focus-within:border-0"
                                placeholder="Nhập địa chỉ..."
                            />
                        </div>
                        <div className="flex gap-4 px-2 justify-start items-center">
                            <div className=" min-w-32 text-left text-base font-bold">Số điện thoại :</div>
                            <input
                                type="text"
                                value={phone}
                                onChange={handlePhoneChange}
                                onKeyPress={handleKeyPress}
                                className="flex-1 rounded-lg ml-1 px-2 py-3 focus-within:border-0"
                                placeholder="Nhập địa chỉ..."
                            />
                        </div>
                        <div className="flex gap-4 px-2 justify-start items-center">
                            <div className=" min-w-32 text-left text-base font-bold">Ghi chú : </div>
                            <input
                                type="text"
                                value={note}
                                onChange={handleNoteChange}
                                onKeyPress={handleKeyPress}
                                className="flex-1 rounded-lg ml-1 px-2 py-3 focus-within:border-0"
                                placeholder="Nhập địa chỉ..."
                            />
                        </div>
                    </div>
                    <div>
                        <Button className=" px-3 py-1.5 bg-blue-600 rounded-2xl hover:bg-blue-400 text-white hover:text-gray-300 font-bold" onClick={() => handleOke()}>Chọn</Button>
                    </div>

                </div>
                :
                <div className="grid grid-cols-10 gap-2 ">
                <div className=" col-span-2 flex  ">
                    <div className="text-base font-semibold ml-2">
                        <span>{name}</span>
                    </div>
                </div>
                <div className="flex  col-span-6 text-center flex-col gap-2 items-start justify-center">
                    <div className="text-base flex ">
                        <div className=" min-w-32 text-left">
                            Địa chỉ :
                        </div>
                        {address.length === 0 ? <div className="text-red-500 text-base">
                            Chưa có địa chỉ người nhận
                        </div> : <div className="text-base">
                            {address}
                        </div>}
                        
                    </div>
                    <div className="text-base flex ">
                        <div className=" min-w-32 text-left">
                            Số điện thoại :
                        </div>
                        {phone.length === 0 ? <div className="text-red-500 text-base">
                            Chưa có địa chỉ người nhận
                        </div> : <div className="text-base">
                            {phone}
                        </div>}
                    </div>
                    <div className="text-base flex ">
                        <div className=" min-w-32 text-left">
                            Ghi chú :
                        </div>
                        {phone.length === 0 ? <div className=" text-gray-400/90 text-base">
                            ghi chú thêm
                        </div> : <div className="text-base">
                            {note}
                        </div>}
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <Button className=" px-2 py-1 bg-blue-600 rounded-2xl hover:bg-blue-400 text-white hover:text-gray-300 font-bold" onClick={() => setChange(true)}>Thay đổi</Button>
                </div>
                </div>
                }
                
        </div>
        
    )
}

export default CheckoutAddress