
export interface Drug {
    name : string,
    quanlity : string,
    usage : string[],
}


export const  convertDrug = (data : any[]) : Drug[] => {

    const newData = data.map((item) => {
        return {
            name : item.drugname,
            quanlity : item.quanlity,
            usage : item.usage,
        }
    })

    return newData
}

export const convertSearchName = (data : Drug[]) : string => {
    let nameSearch = ""
    data.map((item : Drug) => {nameSearch += item.name + " "})
    return nameSearch
}