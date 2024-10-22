import {  ContactInter } from "./dataSelf";


interface Props {
    contact : ContactInter
}

const Contact = ({contact} : Props) => {

    return (
        <>
        <div className="flex gap-6 items-start">
            <div className="p-4 border rounded-full  hover:animate-wiggle">
                {contact.icon}
            </div>
            <div className=" space-y-2 ">
                <div className="text-2xl font-semibold">
                    {contact.label}
                </div>
                <div className="text-sm font-light space-y-1">
                    {
                        contact.des.map((des, index) => {
                            return (
                                <div key={index}>
                                    <span>{des}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Contact