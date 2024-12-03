'use server'
import axios from "axios";
import { GET_LIST_ORDER, GET_STATUS_USER, POST_UPDATE_STATUs, URL } from "./constants";

// for shipper
export const getListForShip = async (token : string) => {
    try {
        const response = await axios.get(URL + GET_LIST_ORDER, {
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

export const postUpdateStatus = async (token : string, id : number, status : string) => {
    try {
        const response = await axios.post(URL + POST_UPDATE_STATUs + `/${id}`,{
            "status": status
        }, {
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


export const getListOrder = async (token : string) => {
    try {
        const response = await axios.get(URL + GET_STATUS_USER, {
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

export const getStatusOrder = async (token : string, id :number) => {
    try {
        const response = await axios.get(URL + GET_STATUS_USER + `/${id}`, {
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