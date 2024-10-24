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
export interface CategoriItem {
    link : string,
    name : string,
    icon : (size : number, color : string) => React.ReactNode,

}

export const ListCategori : CategoriItem[] = [
    {
        link : "asdas",
        name : "thuốc theo đơn",
        icon : (size, color) => <FaPrescriptionBottleMedical size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Không theo đơn",
        icon : (size, color) => <FaBriefcaseMedical size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Thuốc bổ",
        icon : (size, color) => <IoIosNutrition size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Thuốc đặc biệt",
        icon : (size, color) => <MdOutlineHive size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Chăm sóc sức khỏe",
        icon : (size, color) => <RiMentalHealthLine size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Vaccine",
        icon : (size, color) => <MdOutlineVaccines size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Nhiễm trùng",
        icon : (size, color) => <FaDisease size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Cải thiện giấc ngủ",
        icon : (size, color) => <GiNightSleep size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Trẻ nhỏ",
        icon : (size, color) => <BiSolidBabyCarriage size={size} color={color}/>
    },
    {
        link : "asdas",
        name : "Thú cưng",
        icon : (size, color) => <BiSolidBone size={size} color={color}/>
    },

]