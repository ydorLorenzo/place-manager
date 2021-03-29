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
    .then(response => {
      console.log(response);
      return response
    })
    .catch(error => {
      if (error.response) {
        console.log('Error in the server');
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('Error in the request');
        console.log(error.request);
      } else {
        console.log('Error setting up the request');
        console.log('Error: ', error.message);
      }
      console.log(error.config);
    });
}

axios.interceptors.request.use(
  (axiosRequest) => {
    const token = localStorage.getItem('token');
    if (!!token) {
      axiosRequest.headers['Authorization'] = 'Bearer ' + JSON.parse(token);
    }
    return axiosRequest;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      console.log('finding this error: ', error);
    }
    return Promise.reject(error)
  }
);

export function fetchApiCall (url = '', method = MethodType.GET, data = {}, auth = false): Promise<any> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  url = apiBaseRoute + url;
  return axios.request({
    method,
    headers,
    url
  }).then(response => response.data.results);
}
