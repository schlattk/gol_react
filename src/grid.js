import React from 'react';
import './index.css';
import Square from './square';

export default function SquareList(props) {
    const oxGrid = props.oxGrid;
    const listItems = oxGrid.map((item, i) => {
        return(
            <Square item={item} key= {i}/>
        )
    });
    return listItems;
};