import axios from 'axios';
const API_PHOTO = 'https://jsonplaceholder.typicode.com/photos';

export const getPhotoService = (start: number, end: number) => {
  return axios.get(API_PHOTO + `?&_start=${start}&_end=${end}`);
};
