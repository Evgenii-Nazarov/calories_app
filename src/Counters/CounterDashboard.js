import React from 'react';
import List from "./List";
import {get} from 'lodash'

const CounterDashboard = (props) => {
    const counters = get (props, 'counters', []);
    return (
        <>
            <List counters={counters} deleteCounter={props.deleteCounter} changeValue={props.changeValue}/>
        </>
    );
};

export default CounterDashboard;