import axios from 'axios';

export const apiBaseRoute = 'http://144.91.111.4:3005/api';

export enum MethodType {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export const placeRoute = '/v1/places';
export const loginRoute = '/auth/login';
export const logoutRoute = '/auth/logout';

export interface apiProp<T> {
  method: string;
  url: string;
  data: T;
  auth: boolean;
}

const instance = axios.create();

export function loginApiCall (email: string, password: string): Promise<any> {
  return instance.post(
    apiBaseRoute + loginRoute,
    JSON.stringify({ password, email }),
    { headers: { 'Content-Type': 'application/json' } })
    .catch(error => Promise.reject(error));
}

axios.interceptors.request.use(
  (axiosRequest) => {
    const token = localStorage.getItem('token');
    if (!!token) {
      axiosRequest.headers['Authorization'] = 'Bearer ' + token;
    }
    axiosRequest.headers['Content-Type'] = 'application/json';
    return axiosRequest;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log('finding this error: ', error);
    }
    return Promise.reject(error);
  }
);

export function fetchApiCall (url = '', method = MethodType.GET): Promise<any> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  url = apiBaseRoute + url;
  return instance.request({
    method, headers, url
  }).catch(error => Promise.reject(error));
}

export function removeApiCall (url = ''): Promise<any> {
  return axios.delete(apiBaseRoute + url)
    .catch(error => Promise.reject(error));
}

export function addApiCall (url = '', data = {}): Promise<any> {
  return axios.post(apiBaseRoute + url, data);
}
