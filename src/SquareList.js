import React from 'react';
import Square from './square';

export default function SquareList(props) {
    const oxGrid = props.oxGrid;
    let counter = 0;
    const listItems = oxGrid.map(item => {
        counter ++;
        return <Square item={item} key= {counter}/>
    });
    return listItems;
};
