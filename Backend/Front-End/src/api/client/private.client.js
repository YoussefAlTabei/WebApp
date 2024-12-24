import axios from "axios";
import queryString from "query-string";



const baseURL = 'http://localhost:8080';

const privateClient = axios.create({
    baseURL,
    paramsSerializer:{
        encode: params => queryString.stringify(params)
    }
})

privateClient.interceptors.request(async config => {
    return {
        ... config,
        headers:{
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }
})
privateClient.interceptors.response.use(async response => {
    if (response && response.data) return response.data;
    return response;
}, (error) => {
    throw error.response.data
    })
export default privateClient;