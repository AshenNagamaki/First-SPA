import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Ave } from './components/Ave/Ave';
import { ProductsList } from './containers/ProductsList/ProductsList';
import { Contacts } from './components/Contacts/Contacts';
import { About } from './components/About/About';
import { Help } from './components/Help/Help';
import { Cart } from './containers/Cart/Cart';

export const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Ave} />
                <Route path="/products" component={ProductsList} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/about" component={About} />
                <Route path="/help" component={Help} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Layout>
    );
};