import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Ave from './containers/Ave/Ave';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Ave} />
            </Switch>
        </Layout>
    );
};

export default App;