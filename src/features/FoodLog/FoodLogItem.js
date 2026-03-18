import React from 'react';
import { Button, ButtonGroup, Col, Input, ListGroupItem, Row } from 'reactstrap';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const FoodLogItem = ({ item, deleteCounter, changeValue }) => {
  const id = get(item, '_id', '');
  const quantity = get(item, 'quantity', 0);
  const itemName = get(item, 'itemName', '');
  const brandName = get(item, 'brandName', '');
  const photo = get(item, 'photo', '');
  const calories = Math.round(get(item, 'calories', 0));

  const brandWordCount = brandName.split(' ').length;
  const productName = itemName.split(' ').slice(brandWordCount).join(' ');

  const onQuantityChange = e => {
    const value = +get(e, 'target.value', 0);
    changeValue(id, value);
  };

  return (
    <ListGroupItem className="food-list-item p-2">
      <Row className="align-items-center">
        <Col xs={3} md={2}>
          <img className="food-thumbnail img-fluid" src={photo} alt={itemName} />
        </Col>

        <Col xs={9} md={10}>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <span>{productName}</span>
              <p className="brand-name mb-0">{brandName}</p>
            </Col>

            <Col xs={12} md={6} className="d-flex align-items-center mt-1 mt-md-0">
              <ButtonGroup>
                <Button close aria-label="Decrease">
                  <FontAwesomeIcon
                    onClick={() => changeValue(id, quantity - 1)}
                    icon={faCaretDown}
                    size="lg"
                    color="#6c757d"
                  />
                </Button>
                <Input
                  className="ml-2 mr-2 quantity-input"
                  bsSize="sm"
                  value={quantity}
                  onChange={onQuantityChange}
                  type="number"
                  style={{ maxWidth: '50px' }}
                />
                <Button close aria-label="Increase">
                  <FontAwesomeIcon
                    onClick={() => changeValue(id, quantity + 1)}
                    icon={faCaretUp}
                    size="lg"
                    color="#6c757d"
                  />
                </Button>
              </ButtonGroup>
              <span className="mx-2">{`${calories * quantity} cal`}</span>
              <Button className="ml-auto" onClick={() => deleteCounter(id)} close />
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default FoodLogItem;
