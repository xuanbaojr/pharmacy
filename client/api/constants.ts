export const  URL = 'http://pharmacy.com';
export const MODEL = "http://localhost:8000"
export const CHAT = "http://localhost:8001"
export const CHAT_IMAGE = "https://0b73-14-232-232-166.ngrok-free.app"


export const RAW_JSON = {
    'Content-Type': 'application/json',
    crossDomain : true
};

export const GET_USER = '/api/RUI01'
export const POST_USER = '/api/UUI01'

export const LOGIN = '/api/account/login';
export const REGISTER = '/api/account/register';
export const GET_MEDICINE = '/api/RMD01';

export const GET_MEDICINE_SORT = '/api/RMD02'

export const GET_WHITS_LIST = '/api/RWL01'
export const POST_WHITS = '/api/RWL01/IWL01'
export const DELETE_WHITS = '/api/RWL01/DWL'


export const GET_CART = '/api/ROI02';
export const GET_AMOUT = '/totalAmount'
export const PUT_QUANTITY = '/api/UOI01'
export const POST_CART = "/api/IOI01"
export const DELETE_CART = '/api/DOI01'


export const POST_CHECKOUT = '/api/IOD01'


export const GET_LIST_ORDER = "/api/ROD01"
export const GET_STATUS_ORDER = "/api/ROD02"