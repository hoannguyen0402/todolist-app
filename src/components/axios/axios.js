import axios from 'axios' ;

const axiosClient = axios.create({
    baseURL:'https://api.ezfrontend.com',
    headers:{
        'Content-Type':'appLication/json',
    },
});

axios.interceptors.request.use(function(config){
    return config;
},
function(error){

    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    return response;
},function(error){

    return Promise.reject(error);
});

export default axiosClient;