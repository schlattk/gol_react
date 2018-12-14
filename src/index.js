import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import helper from './helper.js';
import ControlForm from './form';
import Square from './square';
import SquareList from './grid';

window.onload = function () {
    let formElement = document.getElementById('form-element');
    ReactDOM.render(<ControlForm />, formElement);
};
let printer = (function () {
    let print = function (oXGrid) {
        let grid = document.getElementById('grid');
        return ReactDOM.render(<SquareList oxGrid ={oXGrid} />, grid);
    };
    return { print: print };
})();
const extractor = (function () {
  let extract = function () {
    let grid = document.getElementById('grid');
    let extractedArray = []
    let length = grid.getElementsByTagName('div').length
    for (let i = 0; i < length; i++){
        if (grid.getElementsByTagName('div')[i].className === "square--grey")
            { extractedArray.push("O") }
        else { extractedArray.push("X") }
    }
    return helper.chunk(extractedArray, Math.pow(extractedArray.length, 0.5))
  }
  return {extract: extract}
})()

export default {extractor: extractor,
                printer: printer,
                SquareList: SquareList,
                Square: Square
                };
