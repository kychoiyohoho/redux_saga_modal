import axios from 'axios'

export const BASE_URL="http://localhost:8282";

const api = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    },
    timeout:20000,
    withCredentials:true,
});

// api.interceptors.request.use(
//     function(config){
//         config.headers["Content-Type"]="application/json; charset=utf-8";
//         return config;
//     },
//     function(error){
//         return Promise.reject(error);
//     }
// );

// api.interceptors.response.use(
//     function(response){
//         return response;
//     },
//     function(error){
//         return Promise.reject(error);
//     }
// );
export default api;