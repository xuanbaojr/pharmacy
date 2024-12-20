'use server'
import axios from 'axios';
import axiosClient from './axios-client';
import { DELETE_CART, GET_AMOUT, GET_CART, POST_CART, PUT_QUANTITY, URL } from './constants';


export const getCarts = async (token : string) => {
    try {
        const response = await axios.get(URL + GET_CART, {
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

export const getAmount = async (token : string) => {
    try {
        const response = await axios.get(URL + GET_AMOUT, {
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


export const postCrat = async (token : string, id: number, quantity : number) => {
    try {
        await axios.post(URL + POST_CART , {
            "medicineID": id,
            "quantity": quantity
        }, 
        {
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

export const getChangeAmount = async (token : string, prod :number, id: number) => {
    try {
        const response = await axios.put(URL + PUT_QUANTITY+ `/${id}`, {
            'quantity' : prod
        }, 
        {
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

export const deleteProduct = async ( token : string, id : number) => {
    try {
        await axios.delete(URL + DELETE_CART + `/${id}` , {
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
