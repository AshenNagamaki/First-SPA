import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Ave from './components/Ave/Ave';
import ProductsList from './containers/ProductsList/ProductsList';
import Cart from './containers/Cart/Cart';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Ave} />
                <Route path="/products" component={ProductsList} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Layout>
    );
};

export default App;