import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import CustomSelect from './CustomSelect';

const AddForm = props => {
  const [selectValue, setSelectValue] = useState('');
  const [options, setOptions] = useState([]);
  const [mealTypeSelectValue, setMealTypeSelectValue] = useState('breakfast');

  const changeOptions = newOptions => {
    setOptions(newOptions);
  };

  const changeSelectValue = newValue => {
    setSelectValue(newValue);
  };

  const addButtonHandler = () => {
    const selectedItem = options.find(el => el._id === selectValue.value);
    props.addCounter({ newCounter: selectedItem, mealType: mealTypeSelectValue });
    setSelectValue('');
    setOptions([]);
  };

  return (
    <>
      <Row className="mb-2 pb-4">
        <Col xs={12} md={7} lg={7} xl={7} className="pb-1">
          <CustomSelect
            selectValue={selectValue}
            changeSelectValue={changeSelectValue}
            options={options}
            changeOptions={changeOptions}
          />
        </Col>
        <Col xs={8} md={3} lg={3} xl={3}>
          <Input
            onChange={e => setMealTypeSelectValue(e.target.value)}
            value={mealTypeSelectValue}
            type="select"
            name="select"
            id="exampleSelect"
          >
            <option value={'breakfast'}>Breakfast</option>
            <option value={'lunch'}>Lunch</option>
            <option value={'diner'}>Diner</option>
          </Input>{' '}
        </Col>
        <Col xs={4} md={2} lg={2} xl={2}>
          <Button
            disabled={selectValue === ''}
            className="btn-block text-white"
            onClick={addButtonHandler}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AddForm;
