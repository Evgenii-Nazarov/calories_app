import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import AddModuleDashboard from './AddModule/AddModuleDashboard';
import CounterDashboard from './Counters/CounterDashboard';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stats from './Stats/Stats';

const initialList = [
  {
    brandName: 'Healthy Choice',
    itemName: 'Healthy Choice Beef Teriyaki',
    calories: 280,
    fat: 19.69,
    protein: 22,
    carbs: 5,
    _id: '5976658a60263c95295fb683',
    qnt: 1,
    photo: 'https://nutritionix-api.s3.amazonaws.com/589eb933ef302bef14e5bd87.jpeg',
  },
  {
    brandName: 'Bolthouse Farms',
    itemName: 'Bolthouse Farms Baby-Cut Carrots',
    calories: 16.1,
    fat: 0,
    protein: 2,
    carbs: 15,
    _id: '5976658a60263c95295fb682',
    qnt: 1,
    photo: 'https://d1r9wva3zcpswd.cloudfront.net/5f6381ad4b187f7f76a08be6.jpeg',
  },
  {
    brandName: 'Oliver Winery and Vineyards',
    itemName: 'Oliver Winery and Vineyards Soft Red Wine',
    calories: 618.8,
    fat: 0,
    protein: 100,
    carbs: 40,
    _id: '5976658a60263c95295fb681',
    qnt: 1,
    photo: 'https://nutritionix-api.s3.amazonaws.com/5b476bb30e4274ca25547e6c.jpeg',
  },
];

function App() {
  const [counters, setCounter] = useState(initialList);

  const addCounter = newCounter => {
    const ifDuplicate = counters.find(el => el._id === newCounter._id);
    if (ifDuplicate) return;

    const newCounters = [{ ...newCounter, qnt: 1 }, ...counters];
    setCounter(newCounters);
  };

  const deleteCounter = _id => {
    const newCounter = counters.filter(el => el._id !== _id);
    setCounter(newCounter);
  };

  const changeValue = (_id, newValue) => {
    if (newValue <= 0) return;

    const newCounter = counters.map(el => {
      if (el._id === _id) el.qnt = newValue;

      return el;
    });

    setCounter(newCounter);
  };

  return (
    <div className="container">
      <Header counters={counters} />
      {/*<Col lg={{ size: 4, offset: 1 }}>*/}
      <Stats counters={counters} />
      {/*</Col>*/}
      <Row>
        <Col className="p-0" lg={{ size: 10, offset: 1 }}>
          <AddModuleDashboard addCounter={addCounter} />

          <CounterDashboard
            counters={counters}
            deleteCounter={deleteCounter}
            changeValue={changeValue}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
