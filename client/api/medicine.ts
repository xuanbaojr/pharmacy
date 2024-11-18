import axios from 'axios';
import { URL, GET_MEDICINE } from './constants';

export const getMedicine = async () : any => {
    const res : any = await axios.get(URL + GET_MEDICINE);
    return res;
}

export const getMedicineDetail = async (id: string) => {
    const res = await axios.get(URL + GET_MEDICINE + `/${id}`);
    return res;
}