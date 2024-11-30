'use server'
import axios from 'axios';
import { URL, GET_MEDICINE, MODEL, CHAT } from './constants';

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

export const getChatbot = async (message : string) => {
  const data = {
    human : message
  }
  const response = await fetch(CHAT + "/default_llm/single_forward/1", {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => {
    if(!res.ok) {
      console.log("Problem")
      return
    }
    return res.json()
  })
  // const response = await axiosClient.post("localhost:8001/default_llm/single_forward/1", hello)
  // return response;

}