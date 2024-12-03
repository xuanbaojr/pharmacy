import { StaticImageData } from "next/image";
import anh1 from "@/public/assets/article/blog-1.jpg"
import anh2 from "@/public/assets/article/blog-2.jpg"
import anh3 from "@/public/assets/article/blog-3.jpg"
import anh4 from "@/public/assets/article/blog-4.jpg"

export interface Article {
    image : StaticImageData,
    alt : string,
    description : string,
    label : string,
}

export const ListArticle : Article[] =[
    {
        image : anh1,
        alt : "ngu",
        description : "Ung thư phổi là một trong những bệnh ung thư được phát hiện thường ở giai đoạn muộn và có tỷ lệ tử vong cao, đứng thứ hai sau ung thư gan tại Việt Nam. Có hai loại chính: ung thư phổi loại tế bào nhỏ và không phải loại tế bào nhỏ. Nguyên nhân chủ yếu là hút thuốc. Các triệu chứng chủ yếu bao gồm ho kéo dài, ho ra máu và khó thở...",
        label : "Xơ vữa động mạch là gì? Triệu chứng, nguyên nhân và cách điều trị",
    },
    {
        image : anh1,
        alt : "ngu",
        description : "Ung thư phổi là một trong những bệnh ung thư được phát hiện thường ở giai đoạn muộn và có tỷ lệ tử vong cao, đứng thứ hai sau ung thư gan tại Việt Nam. Có hai loại chính: ung thư phổi loại tế bào nhỏ và không phải loại tế bào nhỏ. Nguyên nhân chủ yếu là hút thuốc. Các triệu chứng chủ yếu bao gồm ho kéo dài, ho ra máu và khó thở...",
        label : "Ung thư phổi: Dấu hiệu, nguyên nhân, chẩn đoán và điều trị",
    },
    {
        image : anh2,
        alt : "ngu2",
        description : "Ung thư gan nguyên phát là ung thư phổ biến thứ 6 trên toàn thế giới và là nguyên nhân gây tử vong do ung thư đứng hàng thứ 4. Bệnh xuất hiện ngày càng nhiều và có xu hướng gặp nhiều hơn ở người trẻ. Việc phát hiện sớm bệnh để điều trị hiệu quả là một thách thức cho y tế hiện nay.",
        label : "Ung thư gan nguyên phát: Triệu chứng, chẩn đoán và điều trị",
    },
    {
        image : anh3,
        alt : "ngu3",
        description : "Ung thư dạ dày là một trong những loại ung thư phổ biến nhất trên toàn cầu, xếp thứ ba về tỷ lệ mắc ở nam giới và thứ tư ở nữ giới. Tỷ lệ mắc bệnh ở nam giới cao gấp đôi so với nữ giới.",
        label : "Ung thư dạ dày: Dấu hiệu, nguyên nhân và cách điều trị",
    },
    {
        image : anh4,
        alt : "ngu4",
        description : "Tại Việt Nam, tỷ lệ nguy cơ nhiễm virus HPV ít nhất một lần ở nữ giới lên đến 80%. Trong đó, nguyên nhân chủ yếu gây nên ung thư cổ tử cung do nhiễm virus HPV. Tỷ lệ nhiễm cao nhất (20 – 25%) ở phụ nữ 20 – 30 tuổi. Ung thư cổ tử cung là căn bệnh ác tính nguy hiểm. Mặc dù nguy hiểm nhưng bệnh hoàn toàn có thể phòng tránh hoặc điều trị khỏi nếu được phát hiện sớm. Tuy nhiên, bệnh thường không có những dấu hiệu nổi bật nên phần lớn những người mắc bệnh không biết mình mắc bệnh.",
        label : "Ung thư cổ tử cung: Triệu chứng, nguyên nhân và cách điều trị",
    }
]