import axiosClient from "./axios"
import { GET_CART } from "./constants";


export const getListCart = async() => {
    const response = await axiosClient.get(GET_CART, {
        requiresAuth: true, 
    });
    return response
}
