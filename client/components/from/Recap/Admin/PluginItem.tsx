'use client'
import { useState } from "react";
import { change } from "./PluginAdmin";
import { useRouter } from "next/navigation";

interface Props {
    name : string
    isRun : boolean
}

const PluginItem = ({name, isRun} : Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(isRun);
    const router = useRouter()

    const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        await change(event.target.checked, name)
        router.refresh()
    };
    return (
        <div className="w-full px-4 flex gap-5 py-2 items-center border">
            <div className="">
                <input type="checkbox" className="h-5 w-5" checked={isChecked}
                    onChange={handleCheckboxChange}/>
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}

export default PluginItem