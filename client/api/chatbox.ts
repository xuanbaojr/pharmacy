'use client'

import axios from "axios";
import { CHAT, CHAT_IMAGE, GET_DON } from "./constants";

export const chatMessageAI = async ( message : string) => {
    try {
        const response = await axios.post(CHAT + "/default_llm/single_forward/1", {
            'question' : message
        }, );
        return response; // Trả về dữ liệu từ phản hồi
    } catch (error) {
        console.error('Lỗi khi gọi API:', error); // Ghi lại lỗi để kiểm tra
        throw error; // Ném lại lỗi để xử lý ở nơi khác
    }
}


export const chatImageAI = async ( formData : FormData) => {
    try {
        const response = await fetch(CHAT_IMAGE + '/image', {
            method: 'POST',
            headers: {
              accept: 'application/json',
            },
            body: formData,
          });
        return response;// Trả về dữ liệu từ phản hồi
    } catch (error) {
        console.error('Lỗi khi gọi API:', error); // Ghi lại lỗi để kiểm tra
        throw error; // Ném lại lỗi để xử lý ở nơi khác
    }
}

export const getUploadImage = async (formData : FormData) => {
    const response = await fetch(CHAT + GET_DON, {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: formData,
      });
    return response;
}