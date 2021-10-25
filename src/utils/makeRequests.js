import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://demo7242716.mockable.io',
  timeout: 5000,
});


const get = async (url, params) => {
  const response = await axiosInstance.get(url, params);
  return response;
} 

export {
  get
}