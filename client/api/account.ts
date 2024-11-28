import axiosClient from './axios';
import {
    LOGIN,
    RAW_JSON,
    REGISTER
} from './constants';

 interface DataLogin {
    UserName : string;
    Password : string;
 }
 interface DataRegister {
    UserName : string;
    Email: string;
    Password : string;
 }

 export const login = async (data : DataLogin) => {
    const res = await axiosClient.post(LOGIN, {"UserName": data.UserName, "Password": data.Password});
    return res;
 }
 export const register = async (data : DataRegister) => {
    const res = await axiosClient.post(REGISTER, {"UserName": data.UserName,"Email": data.Email, "Password": data.Password}, {headers: RAW_JSON});
    return res;
 }