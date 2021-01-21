import React from 'react';
import AddForm from './AddForm';

const AddModuleDashboard = props => {
  return (
    <>
      <AddForm addCounter={props.addCounter} />
    </>
  );
};

export default AddModuleDashboard;
