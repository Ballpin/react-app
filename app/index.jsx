import React from 'react';
import ReactDOM from 'react-dom';


import Viewport from './Viewport';

if (process.env.NODE_ENV !== 'production') {
    React.Perf = require('react-addons-perf');
}



ReactDOM.render(
    <Viewport />,
    document.getElementById('app')
);