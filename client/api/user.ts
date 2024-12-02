'use server'

import axios from "axios";
import { GET_USER, POST_USER, URL } from "./constants";

export const getUser = async (token : string) => {
    try {
        const response = await axios.get(URL + GET_USER, {
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

export const postUser = async (token : string, name: string, phone : string, address : string) => {
    try {
        await axios.post(URL + POST_USER,{
            "fullName": name,
            "phoneNumber": phone,
            "address": address
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
