import { toast, type ToastOptions } from 'react-toastify';
import { notify } from '../utils/mixin';

export const successReponse = async (res: any) => {
  if (res.data.status === '400') {
      toast.error(res.data.messages[0].messageText || 'Request fail', {
      autoClose: 5000,
    } as ToastOptions);
  } else if (res.data.status === '401') {
    toast.error(res.data.messages[0].messageText || 'Unauthorized', {
      autoClose: 5000,
    } as ToastOptions);
  }  else if (res.data.status === '404') {
    toast.error(res.data.messages[0].messageText || 'Not Found', {
      autoClose: 5000,
    } as ToastOptions);
  } else if (res.data.status === '500') {
    toast.error('Hệ thống có sự cố, vui lòng thử lại', {
      autoClose: 5000,
    } as ToastOptions);
  }
  return res;
};