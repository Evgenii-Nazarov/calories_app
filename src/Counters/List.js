import React from 'react';
import { get } from 'lodash';
import ListItem from './ListItem';
import { Row } from 'reactstrap';

const List = props => {
  const counters = get(props, 'counters', []);
  return (
    <Row>
      {counters.map(el => (
        <ListItem
          key={el._id}
          item={el}
          deleteCounter={props.deleteCounter}
          changeValue={props.changeValue}
        />
      ))}
    </Row>
  );
};

export default List;
