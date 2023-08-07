import axios from 'axios';
import API_CONFIG from "../../config/config";
const apiUrl = process.env.NODE_ENV === 'production' ? API_CONFIG.production : API_CONFIG.development;

export const get = (url, params) => {
    const lastUrl = apiUrl + url;
    return axios.get(lastUrl, { params }).then(response => response.data);
};


export const getDataFromFullUrl = (url, params) => {
    const lastUrl =  url;
    return axios.get(lastUrl, { params }).then(response => response.data);
};
