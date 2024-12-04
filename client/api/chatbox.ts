'use client'

import axios from "axios";
import { CHAT, CHAT_IMAGE, GET_DON, GET_THUOC } from "./constants";

export const chatMessageAI = async ( message : string, name? :string) => {
    try {
        const response = await axios.post(CHAT + "/agent/1", {
            'question' : message,
            'drugname' : name
        }, );
        return response; // Trả về dữ liệu từ phản hồi
    } catch (error) {
        console.error('Lỗi khi gọi API:', error); // Ghi lại lỗi để kiểm tra
        throw error; // Ném lại lỗi để xử lý ở nơi khác
    }
}


export const chatImageAI = async ( formData : FormData) => {
    try {
        const response = await fetch(CHAT + GET_THUOC, {
            method: 'POST',
            headers: {
              accept: 'application/json',
            },
            body: formData,
          });
        return response.json();// Trả về dữ liệu từ phản hồi
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
    return response.json();
}