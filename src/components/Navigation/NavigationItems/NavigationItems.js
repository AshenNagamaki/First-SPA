import React from 'react';

import classes from './NavigationItems.module.css';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { CartIcon } from '../../UI/CartIcon/CartIcon';

export const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/products">SHOP</NavigationItem>
        <NavigationItem link="/contacts">CONTACTS</NavigationItem>
        <NavigationItem link="/about">ABOUT</NavigationItem>
        <NavigationItem link="/" textFloat="center" exact>FOOTWEAR</NavigationItem>
        <NavigationItem link="/cart" textFloat="right"><CartIcon cartIconType="main" cartIconAlt="CART"/></NavigationItem>
        <NavigationItem link="/help" textFloat="right">HELP</NavigationItem>
    </ul>
);