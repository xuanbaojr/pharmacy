import axios from 'axios';
import { URL, GET_MEDICINE, MODEL } from './constants';

export const getMedicine = async ()  => {
    const res : any = await axios.get(URL + GET_MEDICINE);
    return res;
}

export const getMedicineDetail = async (id: string)  => {
    const res : any = await axios.get(URL + GET_MEDICINE + `/${id}`);
    return res;
}

export const getUploadImage = async (formData : FormData) => {
    const response = await fetch(MODEL + '/prescription', {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: formData,
      });
    return response;
}