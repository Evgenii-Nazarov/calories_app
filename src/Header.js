import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import MyModal from './MyModal';

const Header = () => {
  const [aboutModal, setAboutModal] = useState(false);

  const changeModalState = () => {
    setAboutModal(!aboutModal);
  };

  return (
    <>
      <Row className="justify-content-between mt-2">
        <Col xs={8} md={5} lg={10}>
          <FontAwesomeIcon icon={faCarrot} size="2x" pull="left" color="#6c757d" />
          <p className="my-logo-text cursor-default">Calories counter app</p>
        </Col>

        <Col xs={2} md={1} lg={2}>
          <Button outline color="secondary" onClick={changeModalState}>
            About
          </Button>
        </Col>
      </Row>
      <MyModal isOpen={aboutModal} changeMode={changeModalState} />
    </>
  );
};

export default Header;
