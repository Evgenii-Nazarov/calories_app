import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';
import FormSelect from './FormSelect';
import MyModal from '../MyModal';

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
    const selectedItem = options.find(el => el.fields.item_id === selectValue.value);
    props.addCounter(selectedItem);
  };

  const changeModalState = () => {
    setAboutModal(!aboutModal);
  };

  return (
    <>
      <MyModal isOpen={aboutModal} changeMode={changeModalState} />

      <Row className="justify-content-center">
        <Col xs={6}>
          <FormSelect
            selectValue={selectValue}
            changeSelectValue={changeSelectValue}
            options={options}
            changeOptions={changeOptions}
          />
        </Col>
        <Col xs={3}>
          <ButtonGroup className="btn-block text-white">
            <Button
              disabled={selectValue === ''}
              className="btn-block text-white"
              onClick={addButtonHandler}
            >
              Add
            </Button>
            <Button className=" text-white" onClick={changeModalState}>
              About
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </>
  );
};

export default AddForm;
