import { data } from "./test"
import WhitlistItem from "./whitlistItem"

interface Props {

}

const WhitlistContain = () => {

    return (
        <div className="">
            <div className="flex items-center py-2 px-4 bg-blue-600 rounded-lg text-lg mb-5  ">
                <div className=" flex-1 line-clamp-2 text-wrap text-white font-bold text-base">
                    Danh mục các sản phẩm yêu thích
                </div>
            </div>

            {/* content whitlist */}
            <div className=" space-y-2 mt-2">
                {
                    data.map((item, index) => {
                        return (
                            <WhitlistItem whits={item} key={index} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default WhitlistContain