import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import FoodLogItem from './FoodLogItem';

const FoodLog = ({ counters = [], deleteCounter, changeValue }) => {
  const breakfastItems = counters.filter(entry => entry.mealType === 'breakfast');
  const lunchItems = counters.filter(entry => entry.mealType === 'lunch');
  const dinnerItems = counters.filter(entry => entry.mealType === 'dinner');

  const sumCalories = items =>
    items.reduce((total, entry) => total + Math.round(entry.calories) * entry.quantity, 0);

  return (
    <ListGroup className="muted-text">
      <ListGroupItem className="d-block">
        <span className="mr-2">Breakfast</span>
        <span>{sumCalories(breakfastItems)} cal</span>
      </ListGroupItem>
      {breakfastItems.map(entry => (
        <FoodLogItem
          key={entry._id}
          item={entry}
          deleteCounter={deleteCounter}
          changeValue={changeValue}
        />
      ))}

      <ListGroupItem>
        <span className="mr-2">Lunch</span>
        <span>{sumCalories(lunchItems)} cal</span>
      </ListGroupItem>
      {lunchItems.map(entry => (
        <FoodLogItem
          key={entry._id}
          item={entry}
          deleteCounter={deleteCounter}
          changeValue={changeValue}
        />
      ))}

      <ListGroupItem>
        <span className="mr-2">Dinner</span>
        <span>{sumCalories(dinnerItems)} cal</span>
      </ListGroupItem>
      {dinnerItems.map(entry => (
        <FoodLogItem
          key={entry._id}
          item={entry}
          deleteCounter={deleteCounter}
          changeValue={changeValue}
        />
      ))}
    </ListGroup>
  );
};

export default FoodLog;
