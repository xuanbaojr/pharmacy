'use server'
import axios from 'axios';
import { URL, GET_MEDICINE, GET_WHITS_LIST, DELETE_WHITS, POST_WHITS, GET_MEDICINE_SORT, PAGE_SIZE, GET_MEDICINE_SORT_AI, GET_DON, CHAT } from './constants';
import { successReponse } from './handle-response';

export const getMedicine = async (
    page: number , 
    min : number | null, 
    max : number | null , 
    category : string | null,
    pageSize? : number,
    sellWell? : boolean,
    priceDesc? : boolean,
    priceEsc? :boolean )  => {
    const res : any = await axios.post(URL + GET_MEDICINE_SORT, {
        "page": page,
        "pageSize": pageSize? pageSize : PAGE_SIZE,
        "category" : category,
        "minPrice" : min,
        "maxPrice" : max,
        "sellWell": sellWell,
        "priceEsc": priceEsc,
        "priceDesc": priceDesc,
        
    });
    return res;
}

export const getMedicineAISearch = async (
    page: number , 
    search : string
    )  => {
    try {
        const res : any = await axios.post(URL + GET_MEDICINE_SORT_AI, {
            "searchQuery" : search,
            "page": page,
            "pageSize": PAGE_SIZE,
            
        });
    return res;
    } catch {
        // return res
    }

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
      return response
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


