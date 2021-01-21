import React from 'react';
import { Badge, Col, Progress, Row } from 'reactstrap';
import { get } from 'lodash';

const Stats = props => {
  const counters = get(props, 'counters', []);
  const totalCalories = counters.reduce((acc, el) => {
    return acc + Math.round(el.calories) * el.qnt;
  }, 0);

  const totalProtein = counters.reduce((acc, el) => {
    return acc + Math.round(el.protein) * el.qnt;
  }, 0);

  const totalCarbs = counters.reduce((acc, el) => {
    return acc + Math.round(el.carbs) * el.qnt;
  }, 0);

  const totalFat = counters.reduce((acc, el) => {
    return acc + Math.round(el.fat) * el.qnt;
  }, 0);

  const percent = Math.round((totalCalories * 100) / 3000);
  const caloriesProgressColor =
    percent === 0 ? 'muted' : percent < 51 ? 'success' : percent < 101 ? 'warning' : 'danger';

  const percentClass = () => {
    if (percent === 0) return 'text-muted';
    if (percent > 100) return 'text-danger';
    if (percent > 50) return 'text-warning';

    return 'text-success';
  };

  return (
    <>
      <Row className="mb-5 mt-3">
        <Col
          className="d-inline-flex align-items-center"
          lg={{ size: 4, offset: 1 }}
          xl={{ size: 4, offset: 1 }}
        >
          <h2 style={{ margin: '0 auto' }}>
            <Badge color={caloriesProgressColor}>{`Total ${totalCalories} cal`}</Badge>
          </h2>
        </Col>

        <Col lg={6} xl={5}>
          <p className="text-center">
            You have covered <span className={percentClass()}>{percent}%</span> of your daily 3000
            calories norm
          </p>
          <Progress
            className="my-progress"
            color={caloriesProgressColor}
            value={percent}
            max={100}
          />
        </Col>
      </Row>

      {/*<p className="text-center">*/}
      {/*  Protein <span className={percentClass()}>{totalProtein}</span>*/}
      {/*  Carbs <span className={percentClass()}>{totalCarbs}</span>*/}
      {/*  Fat <span className={percentClass()}>{totalFat}</span>*/}
      {/*</p>*/}
      {/*<Progress className="my-progress" color={caloriesProgressColor} value={percent} max={100} />*/}
    </>
  );
};

export default Stats;
