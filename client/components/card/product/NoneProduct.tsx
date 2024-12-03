import { LuAnnoyed } from "react-icons/lu";
interface Props {

}

const NoneProduct = () => {

    return (
        <div className="w-full flex justify-center items-center h-80">
            <div className=" px-5 py-3 bg-slate-400/90 rounded-lg border flex flex-col items-center gap-4 border-gray-300 shadow-sm text-white">
                <LuAnnoyed size={40}/>
                Không có kết quả phù hợp
            </div>

        </div>
    )
}

export default NoneProduct