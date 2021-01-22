import { headers } from './data';
import axios from 'axios';

export const getDishByName = ingredient => {
  const options = {
    method: 'GET',
    url: `https://trackapi.nutritionix.com/v2/search/instant/`,
    params: { query: ingredient, detailed: true },
    headers,
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
