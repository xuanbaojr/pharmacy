import { GET_CART } from './constants';
import axiosClient from "./axios";

export const getCart = async () => {
    const res = await axiosClient.get(GET_CART, {
        requiresAuth: true
    });
    return res.data;
}