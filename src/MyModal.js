import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const MyModal = props => {
  const { isOpen } = props;

  return (
    <>
      <Modal isOpen={isOpen} toggle={props.changeMode}>
        <ModalHeader toggle={props.changeMode}>About this app</ModalHeader>
        <ModalBody>
          <p>
            App was build with JavaScript
            <img
              className="ml-1 mr-1"
              src="https://img.icons8.com/ios/32/000000/javascript.png"
              alt="pic"
            />
            React
            <img src="https://img.icons8.com/plasticine/35/000000/react.png" alt="pic" /> Bootstrap
            <img src="https://img.icons8.com/color/35/000000/bootstrap.png" alt="pic" />
          </p>
          <p className="mb-3">A third-party API named Nutritionix provides food nutrition data</p>
          <p>
            Deployed at Netlify. Here is{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Evgenii-Nazarov/calories_app"
            >
              a link to github
            </a>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.changeMode}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default MyModal;
