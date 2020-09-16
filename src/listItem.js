import React from 'react';

function ListItem(props) {
    const counter = props.el;

    const buttonPlusHandler = () => {
        props.counterPlus(props.index);
    }

    return (
        <div>
            <button>-</button>
            {counter}
            <button onClick={buttonPlusHandler}>+</button>
        </div>
    );
}

export default ListItem;
