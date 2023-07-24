import axios from 'axios';
import router from './router';

const axiosClient = axios.create({
    baseURL: `http://localhost:8080/api`
});

axiosClient.interceptors.request.use((config) => {
    console.log(config);
    const token = '123'; // TODO
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        router.navigate('/login');
        return error;
    }

    throw error;
});

export default axiosClient;
