import axios from 'axios';

export const getDishByName = ingredient => {
  const options = {
    method: 'GET',
    url: 'https://world.openfoodfacts.org/cgi/search.pl',
    params: {
      search_terms: ingredient,
      json: 1,
      page_size: 20,
      fields: 'id,product_name,brands,nutriments,image_thumb_url',
    },
  };

  return axios
    .request(options)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
};
