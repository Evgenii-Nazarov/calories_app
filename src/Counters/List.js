import React from 'react';
import { get } from 'lodash';
import ListItem from './ListItem';
import { ListGroup, ListGroupItem } from 'reactstrap';

const List = props => {
  const counters = get(props, 'counters', []);
  const breakfastItems = counters.filter(el => el.mealType === 'breakfast');
  const lunchItems = counters.filter(el => el.mealType === 'lunch');
  const dinerItems = counters.filter(el => el.mealType === 'diner');

  const breakfastCalories = breakfastItems.reduce(
    (acc, el) => acc + Math.round(el.calories) * el.qnt,
    0
  );
  const lunchCalories = lunchItems.reduce((acc, el) => acc + Math.round(el.calories) * el.qnt, 0);
  const dinerCalories = dinerItems.reduce((acc, el) => acc + Math.round(el.calories) * el.qnt, 0);
  return (
    <ListGroup className="my-logo-text">
      <ListGroupItem className="d-block">
        <span className="mr-2">Breakfast</span>
        <span>{breakfastCalories} cal</span>
      </ListGroupItem>
      {breakfastItems.map(el => (
        <ListItem
          key={el._id}
          item={el}
          deleteCounter={props.deleteCounter}
          changeValue={props.changeValue}
        />
      ))}

      <ListGroupItem>
        <span className="mr-2">Lunch</span>
        <span>{lunchCalories} cal</span>
      </ListGroupItem>
      {lunchItems.map(el => (
        <ListItem
          key={el._id}
          item={el}
          deleteCounter={props.deleteCounter}
          changeValue={props.changeValue}
        />
      ))}

      <ListGroupItem>
        <span className="mr-2">Diner</span>
        <span>{dinerCalories} cal</span>
      </ListGroupItem>

      {dinerItems.map(el => (
        <ListItem
          key={el._id}
          item={el}
          deleteCounter={props.deleteCounter}
          changeValue={props.changeValue}
        />
      ))}
    </ListGroup>
  );
};

export default List;
