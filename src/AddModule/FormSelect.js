import React, { useState } from 'react';
import Select from 'react-select';
import { debounce, get } from 'lodash';
import { getDishByName } from '../query';

const FormSelect = props => {
  const selectValue = get(props, 'selectValue', '');
  const options = get(props, 'options', []);

  const [isLoading, setIsLoading] = useState(false);

  // customising Option in react-select
  const optionsFormatted = options.map(el => ({
    value: el._id,
    label: `${el.itemName} ${el.brandName} calories: ${el.calories}`,
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
          _id: el.nix_item_id || '',
          itemName: el.brand_name_item_name || '',
          brandName: el.brand_name || '',
          calories: el.nf_calories || '',
          fat: itemFat.value || 0,
          protein: itemProtein.value || 0,
          carbs: itemCarbs.value || 0,
        };
      });

      setIsLoading(false);
      props.changeOptions(formattedOptions);
    }
  };

  // const debounceFn = debounce(fetchOnInput, 500);
  //
  // const onInputChangeDebounce = (value, action) => {
  //   if (action.action === 'input-change') {
  //     setIsLoading(true);
  //     debounceFn(value);
  //   }
  // };

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

export default FormSelect;
