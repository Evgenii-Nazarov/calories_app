import React from 'react';
import { Button, ButtonGroup, Col, Input, ListGroupItem, Row } from 'reactstrap';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const ListItem = props => {
  const item = get(props, 'item', {});
  const _id = get(item, '_id', '');
  const qnt = get(item, 'qnt', 0);
  const name = get(item, 'itemName', '');
  const brandName = get(item, 'brandName', '');
  const photo = get(item, 'photo', '');
  const calories = Math.round(get(item, 'calories', 0));

  const brandNameWordsLength = brandName.split(' ').length;
  const newName = name.split(' ').slice(brandNameWordsLength).join(' ');

  const onInputChange = e => {
    let value = +get(e, 'target.value', 0);

    props.changeValue(_id, value);
  };

  return (
    <>
      <ListGroupItem className="my-list-item p-2">
        <Row className="align-items-center">
          <Col xs={3} md={2} lg={1} xl={1}>
            <div>
              <img
                className="my-image img-fluid"
                // style={{ maxWidth: '40%' }}
                src={photo}
                alt={name}
              />
            </div>
          </Col>
          <Col xs={9} md={5} lg={6} xl={6}>
            <span>{newName}</span>
            <p className="brand-color">{brandName}</p>
          </Col>
          <Col xs={7} md={2} lg={2} xl={2}>
            <Row className="justify-content-end">
              <ButtonGroup>
                <Button close aria-label="Cancel">
                  <FontAwesomeIcon
                    onClick={() => props.changeValue(_id, qnt - 1)}
                    icon={faCaretDown}
                    size="lg"
                    color="#6c757d"
                  />
                </Button>
                <Input
                  className="ml-2 mr-2 my-input-number"
                  bsSize="sm"
                  value={qnt}
                  onChange={onInputChange}
                  type="number"
                  pull="right"
                  style={{ maxWidth: '50px' }}
                />
                <Button close aria-label="Cancel">
                  <FontAwesomeIcon
                    onClick={() => props.changeValue(_id, qnt + 1)}
                    icon={faCaretUp}
                    size="lg"
                    color="#6c757d"
                  />
                </Button>
              </ButtonGroup>
            </Row>
          </Col>
          <Col xs={2} md={2} lg={2} xl={2} className="d-flex justify-content-center">
            <span>{`${calories * qnt} cal`}</span>
          </Col>
          <Col xs={1} md={1} lg={1} xl={1}>
            <Button
              className="btn-block pb-1 ml-1"
              onClick={() => props.deleteCounter(_id)}
              close
            />
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
};

export default ListItem;
