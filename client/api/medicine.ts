'use server'
import axios from 'axios';
import { URL, GET_MEDICINE, MODEL, CHAT, GET_WHITS_LIST, DELETE_WHITS, POST_WHITS } from './constants';

export const getMedicine = async ()  => {
    const res : any = await axios.get(URL + GET_MEDICINE);
    return res;
}

export const getMedicineDetail = async (id: string)  => {
    const res : any = await axios.get(URL + GET_MEDICINE + `/${id}`);
    return res;
}

export const getWhitslist = async (token : string) => {
  try {
      const response = await axios.get(URL + GET_WHITS_LIST, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json' // Thêm header Accept
          }
      });
      return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
      console.error('Lỗi khi gọi API:', error); // Ghi lại lỗi để kiểm tra
      throw error; // Ném lại lỗi để xử lý ở nơi khác
  }
}

export const postWhits = async (token : string, id :number) => {
  try {
      const response = await axios.post(URL + POST_WHITS,{
        "medicineID": id
      }, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json' // Thêm header Accept
          }
      });
  } catch (error) {
      console.error('Lỗi khi gọi API:', error); // Ghi lại lỗi để kiểm tra
      throw error; // Ném lại lỗi để xử lý ở nơi khác
  }
}

export const deleteWhits = async (token : string, id : number) => {
  try {
      const response = await axios.delete(URL + DELETE_WHITS + `/${id}`, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json' // Thêm header Accept
          }
      });
  } catch (error) {
      console.error('Lỗi khi gọi API:', error); // Ghi lại lỗi để kiểm tra
      throw error; // Ném lại lỗi để xử lý ở nơi khác
  }
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