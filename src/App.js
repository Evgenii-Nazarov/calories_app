import React, { useState } from 'react';
import './App.css';
import { Row } from 'reactstrap';
import AddModuleDashboard from './AddModule/AddModuleDashboard';
import CounterDashboard from './Counters/CounterDashboard';
import Stats from './Stats';

const initialList = [
  {
    brandName: 'USDA',
    itemName: 'Beef, ground, 80% lean meat / 20% fat, crumbles, cooked, pan - 4 oz, cooked',
    calories: 308.45,
    fat: 19.69,
    protein: 22,
    carbs: 5,
    _id: '5976658a60263c95295fb683',
    qnt: 1,
  },
  {
    brandName: 'USDA',
    itemName: 'Carrots, cooked, boiled, drained, without salt - 1 carrot',
    calories: 16.1,
    fat: 0,
    protein: 2,
    carbs: 15,
    _id: '5976658a60263c95295fb682',
    qnt: 1,
  },
  {
    brandName: 'USDA',
    itemName: 'Red wine, cabernet sauvignon - 1 bottle',
    calories: 618.8,
    fat: 0,
    protein: 100,
    carbs: 40,
    _id: '5976658a60263c95295fb681',
    qnt: 1,
  },
];

function App() {
  const [counters, setCounter] = useState(initialList);

  const addCounter = newCounter => {
    const ifDuplicate = counters.find(el => el.nix_item_id === newCounter.nix_item_id);
    if (ifDuplicate) return;

    const newCounters = [{ ...newCounter, qnt: 1 }, ...counters];
    setCounter(newCounters);
  };

  const deleteCounter = _id => {
    const newCounter = counters.filter(el => el.nix_item_id !== _id);
    setCounter(newCounter);
  };

  const changeValue = (_id, newValue) => {
    if (newValue <= 0) return;

    const newCounter = counters.map(el => {
      if (el.nix_item_id === _id) el.qnt = newValue;

      return el;
    });

    setCounter(newCounter);
  };

  return (
    <div className="container">
      <Stats counters={counters} />
      <AddModuleDashboard addCounter={addCounter} />
      <Row>
        <CounterDashboard
          counters={counters}
          deleteCounter={deleteCounter}
          changeValue={changeValue}
        />
      </Row>
    </div>
  );
}

export default App;
