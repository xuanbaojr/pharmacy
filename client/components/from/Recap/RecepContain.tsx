import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PostMedicineContain from "./PostMedicine/PostMedicineContain"
import AdminContain from "./Admin/AdminContain"

interface Props {

}


const RecepContain = () => {

    return (
        <Tabs defaultValue="admin" className="w-full">
            <TabsList className=" flex justify-start">
                <TabsTrigger value="post" className="bg-slate-200 border border-gray-200 ">Đăng thuốc</TabsTrigger>
                <TabsTrigger value="admin" className="bg-slate-200 border border-gray-200 ">Trang web</TabsTrigger>
            </TabsList>
        <TabsContent value="post" className="w-full bg-white rounded-lg">
            <PostMedicineContain />
        </TabsContent>
        <TabsContent value="admin" className="w-full bg-white rounded-lg">
            <AdminContain />
        </TabsContent>
        </Tabs>
    )
}

export default RecepContain