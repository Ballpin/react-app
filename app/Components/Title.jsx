import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}