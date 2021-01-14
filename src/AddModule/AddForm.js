import React, {useState} from 'react';
import {Button, Col, Row} from "reactstrap";
import FormSelect from "./FormSelect";

const AddForm = (props) => {

    const [selectValue, setSelectValue] = useState('')
    const [options, setOptions] = useState([])

    const changeOptions = (newOptions) => {
        setOptions(newOptions)
    }

    const changeSelectValue = (newValue) => {
        setSelectValue(newValue)
    }

    const addButtonHandler = () => {
        const selectedItem = options.find(el => el.fields.item_id === selectValue.value)
        props.addCounter(selectedItem)
    }


    return (
        <>
            <Row className='justify-content-between'>
                <Col xs={{ size: 6, offset: 2 }} md={{ size: 8, offset: 2 }}>
                    <FormSelect selectValue={selectValue}
                                changeSelectValue={changeSelectValue}
                                options={options}
                                changeOptions={changeOptions}/>

                </Col>
                <Col xs={4} md={2}>
                    <Button disabled={selectValue === ''} className='btn-block text-white' onClick={addButtonHandler}>Add</Button>
                </Col>
            </Row>
        </>
    );
};

export default AddForm;