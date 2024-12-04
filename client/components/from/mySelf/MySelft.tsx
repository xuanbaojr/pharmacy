import Contact from "./Contact"
import { MySelfList } from "./dataSelf"

interface Props {

}

const MySelft = () => {

    return (
        <>
        <div className=" mt-10  space-y-8 ">
            {
                MySelfList.map((contact, index) => 
                    <Contact contact={contact} key={index} />
                )
            }
        </div>
        
        </>
    )
}


export default MySelft