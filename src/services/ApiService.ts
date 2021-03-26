import axios  from 'axios';

export const apiBaseRoute = "http://144.91.111.4:3005/api";

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

export function fetchApiCall(url='', method=MethodType.GET, data={}, auth=false): Promise<any> {
  const headers: HeadersInit = {
    "Content-Type": "application/json"
  }
  url = apiBaseRoute+url;
  return axios.request({
    method,
    headers,
    url
  }).then(response => response.data.results);
}
