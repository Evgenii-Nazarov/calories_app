import React from 'react';
import {get} from "lodash";
import ListItem from "./ListItem";

const List = (props) => {
    const counters = get (props, 'counters', []);
    return (
        <>
            {counters.map(el => <ListItem key={el._id} item={el} deleteCounter={props.deleteCounter} changeValue={props.changeValue}/>)}
        </>
    );
};

export default List;