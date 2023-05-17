import axios from 'axios';
import { API_PATHS } from '../configs/api';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

export const getAllEmployee = () => {
  return axios
    .get(API_PATHS.getEmployee, {
      headers: {
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
      },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
