import React from 'react';
import { Badge, Button, ButtonGroup, Col, Input, ListGroupItem, Row } from 'reactstrap';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Up } from '../up.svg';

const ListItem = props => {
  const item = get(props, 'item', {});
  const _id = get(item, '_id', '');
  const qnt = get(item, 'qnt', 0);
  let name = get(item, 'itemName', '');
  const brandName = get(item, 'brandName', '');
  const photo = get(item, 'photo', '');
  const calories = Math.round(get(item, 'calories', 0));

  const onInputChange = e => {
    props.changeValue(_id, +e.target.value);
  };

  const brandNameWords = brandName.split(' ');
  // name.split(' ').splice(0, brandNameWords.length).join(' ');

  // name = clearName.join(' ');

  return (
    <>
      <ListGroupItem className="my-list-item p-2">
        <div style={{ width: '10%', float: 'left' }}>
          <img className="img-fluid" src={photo} alt={name} />
        </div>
        <Row>
          <Col xs={8} md={5} lg={5}>
            <span>{name}</span>
          </Col>

          <Col md={5} xs={12} lg={3} className="d-flex align-items-center justify-content-center">
            <Row className="align-items-center justify-content-center">
              <ButtonGroup>
                <Button close aria-label="Cancel">
                  <FontAwesomeIcon
                    onClick={() => props.changeValue(_id, qnt - 1)}
                    icon={faCaretDown}
                    size="lg"
                    // border={true}
                    // pull="right"
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

          <Col md={3} xs={12} lg={4} className="d-flex align-items-center justify-content-center">
            <Row className="align-items-center justify-content-center">
              <Col xs={12} md={8}>
                <span className="pt-1 text-center">
                  {/*<Badge>{`${calories * qnt} cal`}</Badge>*/}
                  {`${calories * qnt} cal`}
                </span>
              </Col>

              <Col xs={12} md={4}>
                <Button
                  className="btn-block pb-1 ml-1"
                  onClick={() => props.deleteCounter(_id)}
                  close
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
};

export default ListItem;
