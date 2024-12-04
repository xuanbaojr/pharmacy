'use server'

import axios from "axios"
import { POST_CHECKOUT, URL } from "./constants"



export const postCheckoutDone = async (
    token : string, 
    address : string, 
    phone : string, 
    paymentMethod : string,
    note : string | null,
    orderer : string,
    consignee : string ,
    receivePhoneNum : string ,
) => {
   try {
    await axios.post(URL + POST_CHECKOUT, {
        "shippingAddress": address,
        "orderer": orderer,
        "consignee": consignee,
        "orderPhoneNum": phone,
        "receivePhoneNum": receivePhoneNum,
        "note": note,
        "paymentMethod": paymentMethod
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