import React from 'react';

import classes from './Layout.module.css';
import { NavigationItems } from '../Navigation/NavigationItems/NavigationItems';
import { Auxiliary } from '../../hoc/Auxiliary';

export const Layout = ( props ) => {
    return (
        <Auxiliary>
            <header className={classes.LayoutHeader}>
                <NavigationItems />
            </header>
            <main>{props.children}</main>
        </Auxiliary>
    );
};