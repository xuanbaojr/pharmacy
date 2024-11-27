import axios from 'axios';
import {
    URL,
    LOGIN,
    RAW_JSON,
    REGISTER
} from './constants';
 import {
    postBody 
 } from './request-option';
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
    const res = await axios.post(URL + LOGIN, {"UserName": data.UserName, "Password": data.Password});
    return res;
 }
 export const register = async (data : DataRegister) => {
    const res = await axios.post(URL + REGISTER, {"UserName": data.UserName,"Email": data.Email, "Password": data.Password}, {headers: RAW_JSON});
    return res;
 }