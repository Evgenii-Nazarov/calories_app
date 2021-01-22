import React from 'react';
import { get } from 'lodash';
import ListItem from './ListItem';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

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
        <Row>
          <Col xs={3}>Breakfast</Col>
          <Col>{breakfastCalories} cal</Col>
        </Row>
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
        <Row>
          <Col xs={2}>Lunch</Col>
          <Col>{lunchCalories} cal</Col>
        </Row>
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
        <Row>
          <Col xs={2}>Diner</Col>
          <Col>{dinerCalories} cal</Col>
        </Row>
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
