import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import initializer from './initializer.js';
import startStop from './startstop.js';
import helper from './helper.js';

class ControlForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { action: '' };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState ({ action: event.target.value});
    }
    componentDidUpdate() {
        if (this.state.action === 'random'){ initializer.init(40, 40) }
        else if (this.state.action === 'run') { startStop.run() }
        else if (this.state.action === 'make') { initializer.blank(40, 40) }
        else if (this.state.action === 'stop') { startStop.stop() } 
    }
    render() {
        return(
        <form id = 'form' onClick = { this.handleClick }>
            <input type = 'button' value = 'run'></input>
            <input type = 'button' value = 'stop'></input>
            <input type = 'button' value = 'random'></input>
            <input type = 'button' value = 'make'></input>
         </form>
        );
    };   
};
class Square extends React.PureComponent {
    constructor(props) {
        super(props);
            const isALive = this.props.item === 'X';
            this.state = {
                alive: isALive
            };
            this.handleClick = this.handleClick.bind(this);
    }
   handleClick() {
        this.setState(state => ({
            alive: !state.alive
        }));
    };
    componentWillReceiveProps(nextProps) {
        if(this.props.item !== nextProps.item) {
            this.setState({
                alive: nextProps.item === 'X'
            });
        }
    }
    render() {
        return <div className = { this.state.alive ? "square--green" : "square--grey" } onClick = { this.handleClick } />;
    };
}
function SquareList(props) {
    const oxGrid = props.oxGrid;
    const listItems = oxGrid.map((item, i) => {
        return(
            <Square item={item} key= {i}/>
        )
    });
    return listItems;
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

window.onload = function () {
let formElement = document.getElementById('form-element');
ReactDOM.render(<ControlForm />, formElement);
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();

export default {extractor: extractor,
                  printer: printer,
                  SquareList: SquareList,
                  Square: Square
                };
