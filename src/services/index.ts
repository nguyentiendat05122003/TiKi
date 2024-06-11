import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_URL_API,
});
export const axiosClientCity = axios.create({
    baseURL: import.meta.env.VITE_REACT_CITY_API,
});

export const axiosClientCountry = axios.create({
    baseURL: import.meta.env.VITE_REACT_COUNTRIES_API,
});
export default axiosClient;
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const { config, response } = error;
        if (config.url === 'auth/local/register') {
            if (config.url === 'auth/local/register' && config.method === 'post') {
                const message = response.data.message[0].messages[0].message;
                throw new Error(message);
            } else {
                return Promise.reject(error);
            }
        }
        if (config.url === 'auth/local') {
            if (config.url === 'auth/local' && config.method === 'post') {
                const message = response.data.message[0].messages[0].message;
                throw new Error(message);
            } else {
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    },
);

axiosClientCity.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.results;
});

axiosClientCountry.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
});
