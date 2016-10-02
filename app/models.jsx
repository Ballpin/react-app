import React from 'react';

class Store {
    constructor() {
        this.items = [
            this.item1 = {
                id: 1,
                label: 'Cursor',
                price: 10,
                total: 0
            },
            this.item2 = {
                id: 2,
                label: 'Double Cursor',
                price: 30,
                total: 0
            },
            this.item3 = {
                id: 3,
                label: 'Power',
                price: 50,
                total: 0
            },
            this.item4 = {
                id: 4,
                label: 'Microwaves',
                price: 70,
                total: 0
            },
            this.item5 = {
                id: 5,
                label: 'Fabrics',
                price: 100,
                total: 0
            }
        ]
    }

    addStoreItem(item) {
        return this.items[item].total += 1;
    }

}


export {
    Store
}