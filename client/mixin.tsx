import { toast, type ToastOptions } from 'react-toastify';

export function notify(data: any){
    if(data.status == 200) {
        toast.success('Thành công', {
            autoClose: 5000,
        } as ToastOptions);
    }
    else if(data.status == 400) {
        toast.error(data.Messages[0].MessageText, {
            autoClose: 5000,
        } as ToastOptions);
    }
}