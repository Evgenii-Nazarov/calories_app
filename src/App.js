import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { DEFAULT_FOOD_LOG } from './constants/defaultFoodLog';
import Header from './components/Header';
import AddFood from './features/AddFood';
import FoodLog from './features/FoodLog';
import Stats from './features/Stats';

const loadFoodLog = () => {
  return JSON.parse(localStorage.getItem('calories'));
};

const saveFoodLog = data => {
  localStorage.setItem('calories', JSON.stringify(data));
};

function App() {
  const [foodLog, setFoodLog] = useState([]);

  const addEntry = ({ newCounter: foodItem, mealType }) => {
    const updated = [{ ...foodItem, quantity: 1, mealType, _id: uuidv4() }, ...foodLog];
    saveFoodLog(updated);
    setFoodLog(updated);
  };

  const deleteEntry = id => {
    const updated = foodLog.filter(entry => entry._id !== id);
    saveFoodLog(updated);
    setFoodLog(updated);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;
    if (newQuantity > 99) newQuantity = 99;

    const updated = foodLog.map(entry => {
      if (entry._id === id) entry.quantity = newQuantity;
      return entry;
    });

    saveFoodLog(updated);
    setFoodLog(updated);
  };

  useEffect(() => {
    let stored = loadFoodLog();

    if (!stored) {
      stored = DEFAULT_FOOD_LOG;
      saveFoodLog(DEFAULT_FOOD_LOG);
    }

    setFoodLog(stored);
  }, []);

  return (
    <Row>
      <Col
        xs={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        lg={{ size: 10, offset: 1 }}
        xl={{ size: 10, offset: 1 }}
      >
        <Header counters={foodLog} />
      </Col>

      <Col
        xs={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        lg={{ size: 10, offset: 1 }}
        xl={{ size: 10, offset: 1 }}
      >
        <Jumbotron fluid className="pb-0 pt-5">
          <Container fluid>
            <Stats counters={foodLog} />
            <hr className="my-2 cursor-default" />
            <p className="lead cursor-default">Search for any product and click Add button</p>
            <AddFood addCounter={addEntry} />
          </Container>
        </Jumbotron>
      </Col>

      <Col
        xs={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        lg={{ size: 10, offset: 1 }}
        xl={{ size: 10, offset: 1 }}
      >
        <FoodLog
          counters={foodLog}
          deleteCounter={deleteEntry}
          changeValue={updateQuantity}
        />
      </Col>
    </Row>
  );
}

export default App;
