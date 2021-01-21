import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import MyModal from '../MyModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from './CustomSelect';

const AddForm = props => {
  const [selectValue, setSelectValue] = useState('');
  const [options, setOptions] = useState([]);
  const [aboutModal, setAboutModal] = useState(false);

  const changeOptions = newOptions => {
    setOptions(newOptions);
  };

  const changeSelectValue = newValue => {
    setSelectValue(newValue);
  };

  const addButtonHandler = () => {
    const selectedItem = options.find(el => el._id === selectValue.value);
    props.addCounter(selectedItem);
  };

  const changeModalState = () => {
    setAboutModal(!aboutModal);
  };

  return (
    <>
      <Row className="mb-4">
        <Col className="pr-1 p-0" lg={7} xl={7}>
          <CustomSelect
            selectValue={selectValue}
            changeSelectValue={changeSelectValue}
            options={options}
            changeOptions={changeOptions}
          />
        </Col>
        <Col className="pr-1 p-0" lg={3} xl={2}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Diner</option>
          </Input>{' '}
        </Col>
        <Col className="p-0" lg={2}>
          <Button
            disabled={selectValue === ''}
            className="btn-block text-white"
            onClick={addButtonHandler}
          >
            Add
          </Button>
        </Col>
      </Row>

      {/*<Row>*/}
      {/*  <Col lg={5}>*/}
      {/*    <Input type="select" name="select" id="exampleSelect">*/}
      {/*      <option>Breakfast</option>*/}
      {/*      <option>Lunch</option>*/}
      {/*      <option>Diner</option>*/}
      {/*    </Input>{' '}*/}
      {/*  </Col>*/}
      {/*  <Col lg={1}>*/}
      {/*    <Button disabled={selectValue === ''} className=" text-white" onClick={addButtonHandler}>*/}
      {/*      Add*/}
      {/*    </Button>*/}
      {/*  </Col>*/}
      {/*</Row>*/}

      <Row>
        {/*<Col xs={{ size: 4, offset: 0 }}>*/}
        {/*  <FormSelect*/}
        {/*    selectValue={selectValue}*/}
        {/*    changeSelectValue={changeSelectValue}*/}
        {/*    options={options}*/}
        {/*    changeOptions={changeOptions}*/}
        {/*  />*/}
        {/*</Col>*/}
        {/*<Col xs={1}>*/}
        {/*  <Button disabled={selectValue === ''} className=" text-white" onClick={addButtonHandler}>*/}
        {/*    Add*/}
        {/*  </Button>*/}
        {/*</Col>*/}
        {/*<Col xs={1}>*/}
        {/*  <Button className=" text-white" onClick={changeModalState}>*/}
        {/*    About*/}
        {/*  </Button>*/}
        {/*</Col>*/}
      </Row>
    </>
  );
};

export default AddForm;
