'use client'
import { MODEL } from "@/api/constants";
import { getUploadImage } from "@/api/medicine";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaUpload } from "react-icons/fa6";
import Image from "next/image";
import { Circle, Ellipsis, Heart } from 'react-spinners-css';
interface Props {


}

const LoadImage = () => {
    const [file, setFile] = useState(null);
    const [load, setLoad] = useState(true);

    const handleFileChange = (event : any) => {
      setFile(event.target.files[0]);
      
    };
  
    const handleSubmit = async (event : any) => {
      event.preventDefault();
  
      if (!file) return;
      
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        setLoad(false)
        const response = await getUploadImage(formData);
        setLoad(true)
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
      }
    };

    useEffect(() => {

    }, [load])
 
    return (
        <div className=" h-full w-full bg-blue-400 rounded-xl grid grid-cols-3 gap-0 px-2">
            <div className=" col-span-1 flex items-center text-white ml-4 font-medium">
                Gửi đơn thuốc để AI có thể hỗ trợ tìm thuốc
            </div>
            <form className="flex col-span-2 px-2  items-center justify-between" onSubmit={handleSubmit}>
                <div className="h-full w-full px-4 py-4">
                <div className=" h-full w-full  relative">
                    <input type="file" className=" opacity-0 absolute w-full h-full " accept="image/png" onChange={handleFileChange} />
                    <div className=" h-full flex justify-center items-center border-dashed border border-gray-500" >
                      {file == null ? <FaUpload className="h-10 w-10 text-gray-500" /> : 
                        <div><Image src={URL.createObjectURL(file)} width={50} height={50} alt="as"/></div> 
                      }
                    {!load && <div className=" absolute w-full h-full flex justify-center items-center">
                      <Ellipsis color="#7f58af" size={80}/>
                    </div>}  
                  </div>
                    
                </div>
                </div>
                
                <Button className="bg-white px-2 py-1 hover:bg-gray-200 text-blue-800 text-lg font-semibold gap-2 flex" type="submit">
                    <span>Lấy thuốc</span>
                    <IoMdSend />
                </Button>
            </form>
            
        </div>
      
    )
}

export default LoadImage

const SpinnerLoad = () => {
    return (
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    );
  };
