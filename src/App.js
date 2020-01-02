import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Ave from './components/Ave/Ave';
import ProductsList from './containers/ProductsList/ProductsList';
import Contacts from './components/Contacts/Contacts';
import Cart from './containers/Cart/Cart';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Ave} />
                <Route path="/products" component={ProductsList} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Layout>
    );
};

export default App;