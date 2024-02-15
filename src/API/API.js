import axios from 'axios';

export const AuthInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  AuthInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  AuthInstance.defaults.headers.common.Authorization = '';
};
