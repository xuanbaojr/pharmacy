'use client'
import { CiViewList } from "react-icons/ci";
import { ListCategoriOption } from "./Option";
import { Separator } from "@radix-ui/react-separator";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Location } from "@/app/(root)/(user)/shop/[id]/page";
import { linkPathPlugin } from ".";
  
interface Props {
    category : string | undefined,
    minx : number | undefined,
    maxx : number | undefined
}


const CategoriSelect = ({category, minx, maxx} : Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div className="m-1">
            <div className="flex px-1 gap-1 justify-start items-center border-b-2 border-black mb-2">
                <CiViewList size={20}/>
                <span className="text-lg">
                    Loại thuốc
                </span>
            </div>
            <div className="pl-4">
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-[350px] space-y-2"
                >
                    {/* show */}
                    <Item type="show" indexs={3} category={category} min={minx} max={maxx}/>
                    <CollapsibleContent className="space-y-2">
                        {/* hide */}
                        <Item type="hide" indexs={3} category={category}  min={minx} max={maxx}/>
                    </CollapsibleContent>
                        
                    <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex ">
                        <Explore explor={isOpen} />

                    </Button>
                    </CollapsibleTrigger>
                </Collapsible>
            </div>
        </div>
        
        </>
    )
}

export default CategoriSelect;

const Item = ({type, indexs, category ,min, max} : {type : "hide"|"show", indexs : number, category : string | undefined,min : number | undefined, max: number|undefined }) => {

    return (
        <>
        {
        ListCategoriOption.map((item, index) => {
            if (type == "hide") {
                if (index < indexs) return;
            } else {
                if (index >= indexs) return;
            }
            
            return (
                <div className={`w-full h-full py-1 px-2  ${category === item.label ? "bg-blue-300 rounded-lg" : ""}`} key={item.value}>
                 <Link href={`/shop/${linkPathPlugin(item.label, min, max)}`}  className="text-sm">
                        {item.label}
                </Link>
                </div>    
            )
            })
        }
        </>
    )
}

const Explore = ( {explor} : {explor : boolean}) => {

    if (explor != true ) {
        return (
            <div className="flex justify-start gap-2 items-center">
                <span className="text-sm">Xem thêm</span>
                <FaChevronDown />
            </div>
        )
    } else {
        return (
            <div className="flex justify-start gap-2 items-center">
                <span className="text-sm">Thu gọn</span>
                <FaChevronUp />
            </div>
        )
    }
}