import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import AboutModal from '../AboutModal';

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAbout = () => setIsAboutOpen(prev => !prev);

  return (
    <>
      <Row className="align-items-center justify-content-between mt-2 px-2">
        <Col className="d-flex align-items-center py-2">
          <FontAwesomeIcon icon={faCarrot} size="2x" color="#6c757d" className="mr-3" />
          <p className="muted-text cursor-default mb-0">Calories counter app</p>
        </Col>

        <Col xs="auto" className="py-2">
          <Button outline color="secondary" onClick={toggleAbout}>
            About
          </Button>
        </Col>
      </Row>
      <AboutModal isOpen={isAboutOpen} onClose={toggleAbout} />
    </>
  );
};

export default Header;
