import React from 'react';
import { Badge, Col, Row } from 'reactstrap';

const Stats = ({ counters = [] }) => {
  const totalCalories = counters.reduce((total, entry) => {
    return total + Math.round(entry.calories) * entry.quantity;
  }, 0);

  const caloriesColor =
    totalCalories === 0
      ? 'muted'
      : totalCalories < 1501
      ? 'success'
      : totalCalories < 3001
      ? 'warning'
      : 'danger';

  return (
    <Row className="mb-2">
      <Col
        xs={{ size: 12, offset: 0 }}
        md={{ size: 8, offset: 0 }}
        lg={{ size: 7, offset: 0 }}
        xl={{ size: 6, offset: 0 }}
        className="d-inline-flex align-items-end"
      >
        <span className="display-4 cursor-default">Eugene food log</span>
      </Col>
      <Col
        className="pt-3 d-inline-flex align-items-center justify-content-center"
        xs={{ size: 9, offset: 0 }}
        md={{ size: 4, offset: 0 }}
        lg={{ size: 4, offset: 0 }}
        xl={{ size: 5, offset: 0 }}
      >
        <Row className="d-inline-flex">
          <h2 className="text-center cursor-default">
            <Badge color={caloriesColor}>{`Total ${totalCalories} cal`}</Badge>
          </h2>
        </Row>
      </Col>
    </Row>
  );
};

export default Stats;
