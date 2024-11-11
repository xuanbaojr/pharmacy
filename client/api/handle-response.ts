import { toast, type ToastOptions } from 'react-toastify';
import { notify } from '@/mixin';

export const successReponse = async (res: any) => {
  console.log("API response:", res);

  if (res.status === 400) {
    notify(res);
  } else if (res.status === 401) {
    toast.error(res.data || 'Unauthorized', {
      autoClose: 5000,
    } as ToastOptions);
  } else if (res.status === 500) {
    toast.error('Hệ thống có sự cố, vui lòng thử lại', {
      autoClose: 5000,
    } as ToastOptions);
  }
  return res;
};