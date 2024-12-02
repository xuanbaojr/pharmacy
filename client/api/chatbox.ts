'use client'

import axios from "axios";
import { CHAT } from "./constants";

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