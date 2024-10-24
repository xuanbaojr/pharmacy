import CategoriSelect from "./OptionSelect/CategoriOption/CategoriSelect";
import PriceSelect from "./OptionSelect/PriceOption/PriceSelect";

export interface OptionSelect {
    option : (value : string) => React.ReactNode,
    name : string,

}

export const ListOptionSelect : OptionSelect[] = [
    {
        option : (value) => <CategoriSelect value={value} />,
        name : "1"
    },
    {
        option : (value) => <CategoriSelect value={value} />,
        name : "1"
    },
    {
        option : (value) => <PriceSelect value={value} />,
        name : "2"
    }
]