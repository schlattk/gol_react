import React from 'react';
import './index.css';
import initializer from './initializer.js';
import startStop from './startstop.js';

export default class ControlForm extends React.PureComponent {
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
            <input type = 'button' className = 'run' value = 'run'></input>
            <input type = 'button' className = 'stop' value = 'stop'></input>
            <input type = 'button' className = 'random' value = 'random'></input>
            <input type = 'button' class = 'make' value = 'make'></input>
         </form>
        );
    };   
};

