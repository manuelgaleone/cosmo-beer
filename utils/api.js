import axios from './axiosConfig';

export const userLogin = (payload) => axios.post(`user/login`, payload);