import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import AddModuleDashboard from './AddModule/AddModuleDashboard';
import CounterDashboard from './Counters/CounterDashboard';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';

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
    mealType: 'breakfast',
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
    mealType: 'breakfast',
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
    mealType: 'lunch',
    photo: 'https://nutritionix-api.s3.amazonaws.com/5b476bb30e4274ca25547e6c.jpeg',
  },
];

const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('calories'));
};

const setDataToLocalStorage = data => {
  const formattedData = JSON.stringify(data);
  localStorage.setItem('calories', formattedData);
};

function App() {
  const [counters, setCounter] = useState([]);

  const addCounter = ({ newCounter, mealType }) => {
    const newCounters = [{ ...newCounter, qnt: 1, mealType, _id: uuidv4() }, ...counters];

    setDataToLocalStorage(newCounters);
    setCounter(newCounters);
  };

  const deleteCounter = _id => {
    const newCounters = counters.filter(el => el._id !== _id);

    setDataToLocalStorage(newCounters);
    setCounter(newCounters);
  };

  const changeValue = (_id, newValue) => {
    if (newValue <= 0) return;
    if (newValue > 99) newValue = 99;

    const newCounters = counters.map(el => {
      if (el._id === _id) el.qnt = newValue;

      return el;
    });

    setDataToLocalStorage(newCounters);
    setCounter(newCounters);
  };

  useEffect(() => {
    let initialCounters = getDataFromLocalStorage();

    if (!initialCounters) {
      initialCounters = initialList;
      setDataToLocalStorage(initialList);
    }

    setCounter(initialCounters);
  }, []);

  return (
    <Row>
      <Col
        xs={{ size: 11, offset: 0 }}
        md={{ size: 11, offset: 0 }}
        lg={{ size: 10, offset: 1 }}
        xl={{ size: 11, offset: 1 }}
      >
        <Header counters={counters} />
      </Col>

      <Col
        xs={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        lg={{ size: 10, offset: 1 }}
        xl={{ size: 10, offset: 1 }}
      >
        <Jumbotron fluid className="pb-0 pt-5">
          <Container fluid>
            <Stats counters={counters} />
            <hr className="my-2 cursor-default" />
            <p className="lead cursor-default">Search for any product and click Add button</p>
            <AddModuleDashboard addCounter={addCounter} />
          </Container>
        </Jumbotron>
      </Col>

      <Col
        xs={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        lg={{ size: 10, offset: 1 }}
        xl={{ size: 10, offset: 1 }}
      >
        <CounterDashboard
          counters={counters}
          deleteCounter={deleteCounter}
          changeValue={changeValue}
        />
      </Col>
    </Row>
  );
}

export default App;
