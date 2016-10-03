import React from 'react';

class Store {
    constructor() {
        this.items = [
            this.item1 = {
                id: 0,
                icon: 'fa-hand-pointer-o',
                label: 'Cursor',
                price: 10,
                total: 0
            },
            this.item2 = {
                id: 1,
                icon: 'fa-hand-spock-o',
                label: 'Double Cursor',
                price: 30,
                total: 0
            },
            this.item3 = {
                id: 2,
                icon: 'fa-bolt',
                label: 'Power',
                price: 50,
                total: 0
            },
            this.item4 = {
                id: 3,
                icon: 'fa-archive',
                label: 'Microwaves',
                price: 70,
                total: 0
            },
            this.item5 = {
                id: 4,
                icon: 'fa-building',
                label: 'Fabrics',
                price: 100,
                total: 0
            }
        ]
    }

    buyItem(Store) {
        let a = this.state.Store.item1.total;
        this.setState({Store});
        console.log(this.state);
    }

}


export {
    Store
}