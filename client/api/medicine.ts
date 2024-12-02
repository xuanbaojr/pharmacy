'use server'
import axios from 'axios';
import { URL, GET_MEDICINE, MODEL, GET_WHITS_LIST, DELETE_WHITS, POST_WHITS, GET_MEDICINE_SORT } from './constants';

export const getMedicine = async (
    page: number , 
    min : number | null, 
    max : number | null , 
    category : string | null )  => {
    const res : any = await axios.post(URL + GET_MEDICINE_SORT, {
        "page": page,
        "pageSize": 6,
        "category" : category,
        "minPrice" : min,
        "maxPrice" : max,
        
    });
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
