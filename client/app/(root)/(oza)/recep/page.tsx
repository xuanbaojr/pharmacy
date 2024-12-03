import PostMedicineContain from "@/components/from/Recap/PostMedicine/PostMedicineContain"
import RecepContain from "@/components/from/Recap/RecepContain"

interface Props {

}


const RecapPage = () => {

    return (
        <>
        <div className="px-32 mt-4 ">
            <div className="w-full py-2 space-y-2">
                <RecepContain />
            </div>
        </div>
        </>
    )
}

export default RecapPage