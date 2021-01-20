import React, { useRef } from 'react';
import { get } from 'lodash';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

const OptionCustom = props => {
  const itemName = get(props, 'el.itemName', '');
  const brandName = get(props, 'el.brandName', '');
  const calories = get(props, 'el.calories', 0);

  return (
    // <span>{`${itemName} ${brandName}, ${calories} calories`}</span>
    // <ListGroupItem className="my-option" tag="a" href="#" action>
    <Row>
      <Col xs={8}>
        <span>{`${itemName} `}</span>
        <span>{brandName}</span>
      </Col>
      <Col xs={2}>
        <span>{calories}</span>
      </Col>
    </Row>
    // </ListGroupItem>
  );
};

export default OptionCustom;
