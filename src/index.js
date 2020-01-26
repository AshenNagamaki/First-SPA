import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { App } from './App';
import { configureStore } from './hooks-store/cart-store';

configureStore();

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));