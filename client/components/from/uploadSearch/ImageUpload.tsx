'use client'
import { getUploadImage } from "@/api/medicine";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaUpload } from "react-icons/fa6";
import Image from "next/image";
import { Ellipsis } from 'react-spinners-css';
import { convertDrug, convertSearchName } from "./DataDrug";
import { useRouter } from "next/navigation";
interface Props {
    close : (change : boolean) => void
}

const ImageUpload  = ({close} : Props) => {
    const [file, setFile] = useState(null);
    const [load, setLoad] = useState(true);
    const router = useRouter();
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
        close(false)
        const data : any[] = await response.json();
        const newData = convertDrug(data)
        const searchName = convertSearchName(newData);

        // console.log(data);
        // console.log(searchName)
        
        router.push(`/shop?search_name=${searchName}`);
        
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
      }
    };

    useEffect(() => {

    }, [load])
    return (
        <div className="w-full">
            <form className="" onSubmit={handleSubmit}>
                <div className="h-full w-full px-4 py-4">
                    <div className=" xl:h-80 lg:h-60 md:h-48 w-full  relative">
                        <input type="file" className=" opacity-0 absolute w-full h-full " accept="image/png" onChange={handleFileChange} />
                        <div className=" h-full flex justify-center items-center border-dashed border border-gray-500" >
                        {file == null ? <FaUpload className="h-10 w-10 text-gray-500" /> : 
                            <div><Image src={URL.createObjectURL(file)} width={200} height={300} className="object-cover h-full border" alt="as"/></div> 
                        }
                        {!load && <div className=" absolute w-full h-full flex justify-center items-center">
                        <Ellipsis color="#7f58af" size={80}/>
                        </div>}  
                    </div>
                        
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <Button onClick={() => close(false)} className="bg-white px-2 py-1 hover:bg-gray-200 text-blue-800 text-lg font-semibold gap-2 flex">
                        Close
                    </Button>
                    <Button className="bg-white px-2 py-1 hover:bg-gray-200 text-blue-800 text-lg font-semibold gap-2 flex" type="submit">
                        <span>Lấy thuốc</span>
                        <IoMdSend />
                    </Button>
                </div>
                
            </form>

        </div>
    )
}

export default ImageUpload

