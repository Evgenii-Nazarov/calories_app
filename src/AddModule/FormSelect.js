import React, { useState } from 'react';
import Select from 'react-select';
import { debounce, get } from 'lodash';
import { getDishByName } from '../query';

const FormSelect = props => {
  const selectValue = get(props, 'selectValue', '');
  const options = get(props, 'options', []);
  const [isLoading, setIsLoading] = useState(false);
  const optionsFormatted = options.map(el => ({
    value: el.fields.item_id,
    label: `${el.fields.item_name} ${el.fields.brand_name} calories: ${el.fields.nf_calories}`,
  }));

  const fetchOnInput = async value => {
    if (value !== '') {
      const responseData = await getDishByName(value);
      const hits = get(responseData, 'hits', []);

      setIsLoading(false);
      props.changeOptions(hits);
    }
  };

  const debounceFn = debounce(fetchOnInput, 500);

  const onInputChangeDebounce = (value, action) => {
    if (action.action === 'input-change') {
      setIsLoading(true);
      debounceFn(value);
    }
  };

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
      // cacheOptions
      placeholder="Search for ingredient"
      value={selectValue}
      onChange={onSelectChange}
      options={optionsFormatted}
      // isSearchable={true}
      onInputChange={onInputChangeDebounce}
      name="ingredient"
      id="ingredient"
      isLoading={isLoading}
    />
  );
};

export default FormSelect;
