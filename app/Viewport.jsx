import React from 'react';

import {Store} from './models';

import Title from './Components/Title';
import Stats from './Components/Stats';
import StoreList from './Components/StoreList';
import Clicker from './Components/Clicker';

const StoreModel = new Store();

export default class Viewport extends React.Component {
    constructor() {
        super();
        this.StoreItems = StoreModel.items;

        this.state = {
            ticker: 0,
            rate: 0
        };


    }

    changeRate(rate) {
        this.setState({rate});
    }

    changeTicker(ticker) {
        this.setState({ticker});
    }

    changePrices(prices) {
        console.log(this.state);
        this.setState({prices})
    }


    render() {
        return (
            <div className="Viewport">
                <div className="Left">
                    <Title title="Popcorn Machine"/>
                    <Stats ticker={this.state.ticker} rate={this.state.rate}/>
                    <Clicker changeTicker={this.changeTicker.bind(this)} ticker={this.state.ticker} />
                </div>
                <div className="Middle">

                </div>
                <div className="Right">
                    <h1>Store</h1>
                    <StoreList StoreList={this.StoreItems}
                               ticker={this.state.ticker}
                               rate={this.state.rate}
                               changeRate={this.changeRate.bind(this)}
                               changePrices={this.changePrices.bind(this)}
                               changeTicker={this.changeTicker.bind(this)} />
                </div>
            </div>
        );
    }
}