import FormContact from "@/components/from/contactForm/formContact"
import MySelft from "@/components/from/mySelf/MySelft"

interface Props {

}

const ContactPage = () => {

    return (
        <>
        <div className=" flex gap-5  mt-8 px-10 mb-10">
            <div className=" w-2/3 px-20 ">
                <FormContact />
            </div>
            <div className="w-1/3 px-2">
                <MySelft />
            </div>
        </div>
        </>
    )
}


export default ContactPage