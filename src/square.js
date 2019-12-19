import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
            const isALive = this.props.item === 'X';
            this.state = {
                alive:  isALive
            };
            this.handleClick = this.handleClick.bind(this);
    }
   handleClick() {
        this.setState(state => ({
            alive: !state.alive
        }));
    };
    componentWillReceiveProps(nextProps) {
            this.setState(state => ({
                alive: nextProps.item === 'X'
            }));
    };
    render() {
        return <div className = { this.state.alive ? "square--green" : "square--grey" }
        onClick = { this.handleClick } />;
    };
}
