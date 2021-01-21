import React from 'react';
import { Badge, Col, Progress, Row, Jumbotron, Container } from 'reactstrap';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <FontAwesomeIcon
        // onClick={() => props.changeValue(_id, qnt - 1)}
        icon={faCarrot}
        size="3x"
        // border={true}
        pull="left"
        color="#6c757d"
      />
      <h3 className="my-logo-text">Eugene calories counter</h3>
    </>
  );
};

export default Header;
