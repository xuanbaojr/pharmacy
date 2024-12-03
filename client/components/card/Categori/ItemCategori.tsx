import { FaSkullCrossbones } from "react-icons/fa";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { IoIosNutrition } from "react-icons/io";
import { MdOutlineHive } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineVaccines } from "react-icons/md";
import { FaDisease } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { BiSolidBabyCarriage } from "react-icons/bi";
import { BiSolidBone } from "react-icons/bi";
import { Location } from "@/app/(root)/(user)/shop/[id]/page";
export interface CategoriItem {
    link : string,
    name : string,
    icon : (size : number, color : string) => React.ReactNode,

}

export const ListCategori : CategoriItem[] = [
    {
        link : "thuốc theo đơn",
        name : "thuốc theo đơn",
        icon : (size, color) => <FaPrescriptionBottleMedical size={size} color={color}/>
    },
    {
        link : "Không theo đơn",
        name : "Không theo đơn",
        icon : (size, color) => <FaBriefcaseMedical size={size} color={color}/>
    },
    {
        link : "Thuốc bổ",
        name : "Thuốc bổ",
        icon : (size, color) => <IoIosNutrition size={size} color={color}/>
    },
    {
        link : "Thuốc đặc biệt",
        name : "Thuốc đặc biệt",
        icon : (size, color) => <MdOutlineHive size={size} color={color}/>
    },
    {
        link : "Chăm sóc sức khỏe",
        name : "Chăm sóc sức khỏe",
        icon : (size, color) => <RiMentalHealthLine size={size} color={color}/>
    },
    {
        link : "Vaccine",
        name : "Vaccine",
        icon : (size, color) => <MdOutlineVaccines size={size} color={color}/>
    },
    {
        link : "Nhiễm trùng",
        name : "Nhiễm trùng",
        icon : (size, color) => <FaDisease size={size} color={color}/>
    },
    {
        link : "Cải thiện giấc ngủ",
        name : "Cải thiện giấc ngủ",
        icon : (size, color) => <GiNightSleep size={size} color={color}/>
    },
    {
        link : "Trẻ nhỏ",
        name : "Trẻ nhỏ",
        icon : (size, color) => <BiSolidBabyCarriage size={size} color={color}/>
    },
    {
        link : "Thú cưng",
        name : "Thú cưng",
        icon : (size, color) => <BiSolidBone size={size} color={color}/>
    },

]

export const convertLink =(link : string) => {
    const location : Location= {
        searchName : link
    }
    const userString = encodeURIComponent(JSON.stringify(location));

    return userString

}