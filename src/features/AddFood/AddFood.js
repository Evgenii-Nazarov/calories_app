import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import FoodSearchSelect from './FoodSearchSelect';

const AddFood = ({ addCounter }) => {
  const [selectedFood, setSelectedFood] = useState('');
  const [foodOptions, setFoodOptions] = useState([]);
  const [mealType, setMealType] = useState('breakfast');

  const handleAddEntry = () => {
    const foodItem = foodOptions.find(item => item._id === selectedFood.value);
    addCounter({ newCounter: foodItem, mealType });
    setSelectedFood('');
    setFoodOptions([]);
  };

  return (
    <Row className="mb-2 pb-4">
      <Col xs={12} md={7} lg={7} xl={7} className="pb-1">
        <FoodSearchSelect
          selectValue={selectedFood}
          changeSelectValue={setSelectedFood}
          options={foodOptions}
          changeOptions={setFoodOptions}
        />
      </Col>
      <Col xs={8} md={3} lg={3} xl={3}>
        <Input
          onChange={e => setMealType(e.target.value)}
          value={mealType}
          type="select"
          name="mealType"
          id="mealTypeSelect"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </Input>
      </Col>
      <Col xs={4} md={2} lg={2} xl={2}>
        <Button
          disabled={selectedFood === ''}
          className="btn-block text-white"
          onClick={handleAddEntry}
        >
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default AddFood;
