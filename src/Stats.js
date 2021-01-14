import React from 'react';
import {Badge, Col, Progress, Row, Jumbotron, Container} from "reactstrap";
import {get} from "lodash";

const Stats = (props) => {
    const counters = get(props, 'counters', []);

    const totalCalories = counters.reduce((acc, el) => acc + (Math.round(el.fields.nf_calories) * el.qnt), 0)
    const percent = Math.round(totalCalories * 100 / 3000)

    const percentClass = () => {
        if (percent === 0) return 'text-muted'
        if (percent > 100) return 'text-danger'
        if (percent > 50) return 'text-warning'

        return 'text-success'
    }

    const isMuted = counters.length === 0 ? 'text-muted' : null
    const progressColor = percent === 0 ? 'muted' : percent < 51 ? 'success' : percent < 101 ? 'warning' :  'danger'

    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <Col sm={12} md={9} lg={7}>
                            <h1 className="display-3 ">Track your meal</h1>
                        </Col>

                        <Col sm={12} md={3} lg={5} className="d-flex justify-content-center align-items-center">
                                <span className='lead mr-2'>Total:</span>
                                <h2 className='d-inline'><Badge color={progressColor}>{`${totalCalories} cal`}</Badge></h2>
                        </Col>
                    </Row>

                    <hr className="my-2 mb-4"/>
                    <Row>
                        <Col sm={12} md={7} lg={6} className="d-flex justify-content-between">
                                <p className='ml-2'>Search for any product and click Add button</p>
                        </Col>

                        <Col sm={12} md={5} lg={6} className="d-flex justify-content-center">
                            <div className={`${isMuted} align-items-center`}>
                                <p className="text-center">You have covered <span
                                    className={percentClass()}>{percent}%</span> of
                                    your daily 3000 calories norm</p>
                                <Progress className='my-progress' color={progressColor} value={percent} max={100}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Stats;