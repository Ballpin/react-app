import React from 'react';

export default class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.TickerLimit = 1000000;

    }

    buyItem(id) {
        if (this.props.ticker >= this.props.StoreList[id].price) {
            // Add Total of Item
            this.props.StoreList[id].total++;

            // Count Rate
            let CursorItems = 0.1 * this.props.StoreList[0].total,
                DoubleCursorItems = 0.2 * this.props.StoreList[1].total,
                PowerItem = 1 * this.props.StoreList[2].total,
                Microwave = 8 * this.props.StoreList[3].total,
                Fabrics = 20 * this.props.StoreList[4].total;

            let results = CursorItems + DoubleCursorItems + PowerItem + Microwave + Fabrics;

            // Change Price
            this.props.StoreList[id].price += this.props.StoreList[id].total - 1;

            // Change Rate
            this.props.changeRate(Math.round(results * 100) / 100);

            // Change Ticker
            this.props.changeTicker(this.props.ticker - this.props.StoreList[id].price);


            console.log(this.props.StoreList);

            this.handleTicker();
        } else {
            alert('You cant afford this get more popcorns first.')
        }


    }

    handleTicker() {
        if (this.interval != undefined) {clearInterval(this.interval);}
        this.interval = setInterval(() => {
            let results = this.props.ticker + this.props.rate;
            //console.log(this.props.ticker);
            this.props.changeTicker(Math.round(results * 100) / 100);
            if(this.props.ticker > this.TickerLimit) {clearInterval(this.interval)}
        }, 1000);


        // var tickerCount = this.props.ticker + this.props.rate;
        // setInterval(function() {
        //     console.log(tickerCount);
        //     this.props.changeTicker(tickerCount);
        // }, 1000);
    }

    render() {
        return (
            <div>
                <ul className="StoreList">{this.props.StoreList.map(item =>
                    <li key={item.id} className="item">
                        <button onClick={this.buyItem.bind(this, item.id)}>
                            <div className="icon">
                                <i className={'fa ' + item.icon}></i>
                            </div>
                            <div className="itemInfo">
                                <div className="label">{item.label}</div>
                                <div className="price">Price: {this.props.StoreList[item.id].price}</div>
                            </div>
                            <div className="total">
                                Total: {item.total}
                            </div>
                        </button>
                    </li>
                )}</ul>
            </div>
        )
    }
}