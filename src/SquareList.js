import React from 'react';
import Square from './Square';

export default function SquareList(props) {
    const oxGrid = props.oxGrid;
    const listItems = oxGrid.map((item, i) => {
        return(
            <Square item={item} key= {i}/>
        )
    });
    return listItems;
};
