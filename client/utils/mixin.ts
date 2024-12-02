export function formatNumber(input: number): string {
    const numberString = input.toString();
    const parts = numberString.split('.');
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    
    const regex = /(\d+)(\d{3})/;
    let formattedInteger = integerPart;

    while (regex.test(formattedInteger)) {
        formattedInteger = formattedInteger.replace(regex, '$1.$2');
    }

    return formattedInteger + decimalPart;
}


export const convertComment = (content : string, subLength : number) => {
    if(content.length > subLength) {
        const sub = content.substring(0,subLength)
        const index = sub.lastIndexOf(" ")
        return sub.substring(0,index) + "..."
    }
    return content
}
export const convertDate = (dateTime: string): string => {
    const date = new Date(dateTime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};