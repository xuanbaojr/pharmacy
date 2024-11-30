import FollowItem from "./FollowItem"
import { data } from "./test"


interface Props {

}

const FollowContain = () => {

    return (
        <div>
            <div className="flex items-center py-2 px-4 bg-blue-600 rounded-lg text-white text-lg mb-5">
                <div className="flex-1 line-clamp-2 text-wrap">
                    Danh sách trạng thái các đơn hàng
                </div>
            </div>
            <div className=" flex gap-2 px-4 py-1.5 border border-gray-200 shadow-sm bg-gray-400 rounded-lg text-lg">
                <div className=" flex-1">
                    Người gửi
                </div>
                <div className=" flex-1">
                    Người nhận
                </div>
                <div className="flex-1 flex justify-evenly gap-2 px-2">
                    <div className = "flex-1 ">
                    Ngày gửi
                    </div>
                    <div className=" flex-1 text-center ">
                        số tiền
                    </div>
                    <div className=" flex-1 text-center">
                        Trạng thái
                    </div>  
                </div>
                
            </div>

            {/* content order */}
            <div className=" space-y-2 mt-2">
                {
                    data.map((item, index) => {
                        return (
                            <FollowItem follow={item} key={index} />
                        )
                    })
                }

            </div>

            

        </div>
    )
}

export default FollowContain