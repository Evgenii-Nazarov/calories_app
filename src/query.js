import { headers } from './data';
import axios from 'axios';

export const getDishByName = ingredient => {
  const options = {
    method: 'GET',
    url: `https://nutritionix-api.p.rapidapi.com/v1_1/search/${ingredient}`,
    params: { fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat' },
    headers,
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      throw new Error('ERROR http');
    });
};
