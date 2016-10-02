import React from 'react';

import {Store} from './models';

import Title from './Components/Title';
import Stats from './Components/Stats';

export default class Viewport extends React.Component {
    constructor() {
        super();
        this.state = {
            ticker: 0,
            rate: 0,
            Store: new Store()
        }
    }



    render() {
        console.log(this.state.Store);
        return (
            <div className="Viewport">
                <div className="Left">
                    <Title title="Popcorn Machine" />
                    <Stats ticker={this.state.ticker} rate={this.state.rate} />

                </div>
                <div className="Middle">

                </div>
                <div className="Right">
                    <h1>Store</h1>
                    <ul className="StoreList">{this.state.Store.items.map(item =>
                        <li key={item.id}><button>{item.label}</button></li>
                    )}</ul>
                </div>
            </div>
        );
    }
}