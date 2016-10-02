import React from 'react';



export default class Stats extends React.Component {
    render() {
        return (
            <div className="Stats">
                <div className="ticker">
                    {this.props.ticker} Popcorns
                </div>
                <div className="rate">
                    per second: {this.props.rate}
                </div>
            </div>
        )
    }
}