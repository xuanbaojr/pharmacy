import { toast, type ToastOptions } from 'react-toastify';

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

export function notify(data: any){
    if(data.status == 200) {
        toast.success('Thành công', {
            autoClose: 5000,
        } as ToastOptions);
    }
    else if(data.status == 400) {
        toast.error(data.messages[0].messageText, {
            autoClose: 5000,
        } as ToastOptions);
    }
}