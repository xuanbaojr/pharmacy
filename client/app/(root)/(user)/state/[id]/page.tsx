import StateContain from "@/components/shared/State/StateContain"




const StatePage = ({ params }: { params: { id: string } }) => {

    return (
        <div className="xl:mx-32 lg:mx-20 md:mx-8 px-4 my-5">
            <StateContain />
            {params.id}
        </div>
    )
}

export default StatePage