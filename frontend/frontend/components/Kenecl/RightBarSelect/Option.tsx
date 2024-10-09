import Search from "./OptionSelect/SearchOption/Search"

export interface OptionSelect {
    option : (value : string) => React.ReactNode
    name : string,
}

export const ListOptionSelect : OptionSelect[] =[
    {
        option : (value) => <Search value={value}/>,
        name : "1",
    },
    {
        option : (value) => <></>,
        name : "2",
    }
]