import React from 'react';

export default class Clicker extends React.Component {
    handleChange(e) {
        let currentVal = this.props.ticker + 1;
        this.props.changeTicker(currentVal);
    }

    render() {
        return (
            <div className="Clicker">
                <button onClick={this.handleChange.bind(this)}>Clicker</button>
            </div>
        )
    }
}