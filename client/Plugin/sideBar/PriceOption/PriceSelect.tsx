'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { linkPathPlugin } from "."

interface Props {
    category : string | undefined,
    minx : number | undefined,
    maxx : number | undefined
}

export const PriceSelect = ({category, minx, maxx} : Props) => {
    const router  = useRouter()
    const [min, setMin] = useState<number>(minx === undefined ? 0 : minx)
    const [max, setMax] = useState<number>(maxx === undefined ? 0 : maxx)

    const handlMin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMin(Number(event.target.value))
    }
    const handlMax= (event: React.ChangeEvent<HTMLInputElement>) => {
        setMax(Number(event.target.value))
    }

    const click = () => {
        if (min ===0 || max === 0) {
            return 
        } else if (min >= max) {
            return 
        } else {
            router.push(`/shop/${linkPathPlugin(category, min, max)}`);
        }
    }

    return (
        <>
        <div className="m-1 ">
            <div className="flex px-1 gap-1 justify-start items-center border-b-2 border-black mb-2">
                <span className="text-lg">
                    Khoảng giá
                </span>
            </div>
            <div className="">
                <div className="flex justify-between gap-3">
                    <Input value={min} onChange={handlMin} placeholder="từ"/>
                    <Input value={max} onChange={handlMax} placeholder="đến"/>
                </div>
                <Button onClick={click} className="w-full rounded-lg bg-blue-500 flex justify-center items-center mt-3 ">
                    <div>
                        Áp dụng
                    </div>
                </Button>
                
            </div>
        </div>

        </>
    )
}

export default PriceSelect