

export interface MenuItem {
    label : string,
    link : string,
}

export const MenuContants : MenuItem[] = [
    {
        label: "Trang chủ",
        link : "/"
    },
    {
        label : "Cửa hàng",
        link : "/shop"
    },
    {
        label : "Bài viết",
        link : "/article",
    },
    {
        label : "Liên hệ",
        link : "/contact"
    }
]