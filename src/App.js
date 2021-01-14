import React, {useState} from 'react';
import './App.css';
import {Row} from "reactstrap";
import AddModuleDashboard from "./AddModule/AddModuleDashboard";
import CounterDashboard from "./Counters/CounterDashboard";
import Stats from "./Stats";

const initialList = [
    {
        fields: {
            brand_name: "USDA",
            item_id: "571fb9c478ad77b849f9bd91",
            item_name: "Beef, ground, 80% lean meat / 20% fat, crumbles, cooked, pan - 4 oz, cooked",
            nf_calories: 308.45,
            nf_serving_size_qty: 1,
            nf_serving_size_unit: "serving",
            nf_total_fat: 19.69,
        },
        _id: "571fb9c478ad77b849f9bd91",
        _index: "f762ef22-e660-434f-9071-a10ea6691c27",
        _score: 12.290755,
        _type: "item",
        qnt: 1
    },
    {
        fields: {
            brand_name: "USDA",
            item_id: "513fceb575b8dbbc210014e2",
            item_name: "Carrots, cooked, boiled, drained, without salt - 1 carrot",
            nf_calories: 16.1,
            nf_serving_size_qty: 1,
            nf_serving_size_unit: "serving",
            nf_total_fat: 0.08,
        },
        _id: "513fceb575b8dbbc210014e2",
        _index: "f762ef22-e660-434f-9071-a10ea6691c27",
        _score: 12.787365,
        _type: "item",
        qnt: 1
    },
    {
        fields: {
            brand_name: "USDA",
            item_id: "5976658a60263c95295fb683",
            item_name: "Red wine, cabernet sauvignon - 1 bottle",
            nf_calories: 618.8,
            nf_serving_size_qty: 1,
            nf_serving_size_unit: "serving",
            nf_total_fat: 0,
        },
        _id: "5976658a60263c95295fb683",
        _index: "f762ef22-e660-434f-9071-a10ea6691c27",
        _score: 12.858129,
        _type: "item",
        qnt: 1
    }
]

function App() {
    const [counters, setCounter] = useState(initialList)

    const addCounter = (newCounter) => {
        const ifDuplicate = counters.find(el => el._id === newCounter._id)
        if (ifDuplicate) return

        const newCounters = [ {...newCounter, qnt: 1}, ...counters]
        setCounter(newCounters)
    }

    const deleteCounter = (_id) => {
        const newCounter = counters.filter(el => el._id !== _id)
        setCounter(newCounter)
    }

    const changeValue = (_id, newValue) => {
        if (newValue <= 0) return

        const newCounter = counters.map(el => {
            if (el._id === _id) el.qnt = newValue

            return el
        })

        setCounter(newCounter)
    }

    return (
        <div className="container">
            <Stats counters={counters}/>
            <AddModuleDashboard addCounter={addCounter}/>
            <Row>
                <CounterDashboard counters={counters} deleteCounter={deleteCounter} changeValue={changeValue}/>
            </Row>
        </div>
    );
}

export default App;
