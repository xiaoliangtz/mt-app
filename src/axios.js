import axios from 'axios';
// axios.defaults.baseURL = 'http://open.duyiedu.com';
// 请求拦截
axios.interceptors.request.use((config) => {
    // console.log(config);
    config.params = {
        ...config.params,
        appkey: '18222774393_1591147277161'
    }
    return config;
}, (error) => {
    // 错误反馈
    return Promise.reject(error);
});
export default axios;
