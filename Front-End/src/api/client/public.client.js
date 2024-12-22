import axios from "axios";
import queryString from "query-string";



const baseURL = 'http://localhost:8080';

const publicClient = axios.create({
    baseURL,
    paramsSerializer:{
        encode: params => queryString.stringify(params)
    }
})

publicClient.interceptors.request(async config => {
    return {
        ... config,
        headers:{
            "content-type": "application/json",
        }
    }
})
publicClient.interceptors.response.use(async response => {
    if (response && response.data) return response.data;
    return response;
}, (error) => {
    throw error.response.data
})
export default publicClient;