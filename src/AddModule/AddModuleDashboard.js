import React from 'react';
import AddForm from "./AddForm";


const AddModuleDashboard = (props) => {


    return (
        <div className='my-search'>
            <AddForm addCounter={props.addCounter}/>
        </div>
    );
};

export default AddModuleDashboard;