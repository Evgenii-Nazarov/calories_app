import React from 'react';
import { get } from 'lodash';
import ListItem from './ListItem';
import { ListGroup, ListGroupItem, Row } from 'reactstrap';

const List = props => {
  const counters = get(props, 'counters', []);

  return (
    <Row>
      <ListGroup>
        <ListGroupItem>Breakfast</ListGroupItem>
        {counters.map(el => (
          <ListItem
            key={el._id}
            item={el}
            deleteCounter={props.deleteCounter}
            changeValue={props.changeValue}
          />
        ))}
        <ListGroupItem>Lunch</ListGroupItem>
        {counters.map(el => (
          <ListItem
            key={el._id}
            item={el}
            deleteCounter={props.deleteCounter}
            changeValue={props.changeValue}
          />
        ))}
        <ListGroupItem>Diner</ListGroupItem>
        {counters.map(el => (
          <ListItem
            key={el._id}
            item={el}
            deleteCounter={props.deleteCounter}
            changeValue={props.changeValue}
          />
        ))}
      </ListGroup>
    </Row>
  );
};

export default List;
