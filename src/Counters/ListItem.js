import React from 'react';
import {Badge, Button, ButtonGroup, Card, CardBody, Col, Input, Row} from "reactstrap";
import {get} from "lodash";

const ListItem = (props) => {
    const item = get(props, 'item', {});
    const _id = get(item, '_id', '');
    const qnt = get(item, 'qnt', 0);
    const name = get(item, 'fields.item_name', '');
    const brandName = get(item, 'fields.brand_name', '');
    const calories = Math.round(get(item, 'fields.nf_calories', 0));

    const onInputChange = (e) => {
        props.changeValue(_id, +e.target.value)
    }

    return (
        <>
            <Card className='mt-2 mb-2'>
                <CardBody>
                    <Row className='align-items-center'>
                        <Col md={7} xs={12} lg={8} className='d-flex align-items-center justify-content-center'>
                            <p className='text-center'>{name + ', ' + brandName}</p>
                        </Col>

                        <Col md={2} xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
                            <Row className='align-items-center justify-content-center'>
                                <ButtonGroup>
                                    <Button size="sm" onClick={() => props.changeValue(_id, qnt - 1)}>-</Button>
                                    <Input className='ml-2 mr-2 my-input-number'
                                           bsSize="sm"
                                           value={qnt}
                                           onChange={onInputChange}
                                           type="number"
                                           style={{maxWidth: '50px'}}
                                    />
                                    <Button size="sm" onClick={() => props.changeValue(_id, qnt + 1)}>+</Button>
                                </ButtonGroup>
                            </Row>
                        </Col>

                        <Col md={3} xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
                            <Row className='align-items-center justify-content-center'>
                                <Col xs={12} md={8}>
                                <h3 className='pt-1 text-center'><Badge>{`${calories * qnt} cal`}</Badge></h3>
                                </Col>

                                <Col xs={12} md={4}>
                                <Button className='btn-block pb-1 ml-1' onClick={() => props.deleteCounter(_id)}close/>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </CardBody>
            </Card>
        </>
    );
};

export default ListItem;