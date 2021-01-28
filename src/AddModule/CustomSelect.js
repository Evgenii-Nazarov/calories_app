import React, { useState } from 'react';
import Select from 'react-select';
import { debounce, get } from 'lodash';
import { getDishByName } from '../query';

const CustomSelect = props => {
  const selectValue = get(props, 'selectValue', '');
  const options = get(props, 'options', []);

  const [isLoading, setIsLoading] = useState(false);

  const optionsFormatted = options.map(el => ({
    value: el._id,
    label: `${el.itemName}, calories: ${el.calories}`,
  }));

  const fetchOnInput = async value => {
    if (value === '') props.changeOptions([]);

    if (value !== '') {
      const responseData = await getDishByName(value);
      const rawOptions = get(responseData, 'branded', []);
      const formattedOptions = rawOptions.map(el => {
        const itemNutrients = get(el, 'full_nutrients', []);
        const itemFat = itemNutrients.find(nutrient => nutrient.attr_id === 204) || {};
        const itemProtein = itemNutrients.find(nutrient => nutrient.attr_id === 203) || {};
        const itemCarbs = itemNutrients.find(nutrient => nutrient.attr_id === 205) || {};

        return {
          _id: get(el, 'nix_item_id', ''),
          itemName: get(el, 'brand_name_item_name', ''),
          brandName: get(el, 'brand_name', ''),
          calories: get(el, 'nf_calories', ''),
          photo: get(el, 'photo.thumb', ''),
          fat: itemFat.value || 0,
          protein: itemProtein.value || 0,
          carbs: itemCarbs.value || 0,
        };
      });

      setIsLoading(false);
      props.changeOptions(formattedOptions);
    }
  };

  const onInputChangeDebounce = debounce((value, action) => {
    if (action.action === 'input-change') {
      setIsLoading(true);
      fetchOnInput(value);
    }
  }, 500);

  const onSelectChange = (value, { action }) => {
    if (action === 'clear') {
      props.changeSelectValue(null);
      props.changeOptions([]);
    }
    if (value) props.changeSelectValue(value);
  };

  return (
    <Select
      isClearable
      placeholder="Search for ingredient"
      value={selectValue}
      onChange={onSelectChange}
      options={optionsFormatted}
      onInputChange={onInputChangeDebounce}
      name="ingredient"
      id="ingredient"
      isLoading={isLoading}
    />
  );
};

export default CustomSelect;
