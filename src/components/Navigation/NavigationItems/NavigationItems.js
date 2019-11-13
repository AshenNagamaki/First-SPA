import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import CartIcon from '../../UI/CartIcon/CartIcon';
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/products">SHOP</NavigationItem>
        <NavigationItem link="/contacts">CONTACTS</NavigationItem>
        <NavigationItem link="/about">ABOUT</NavigationItem>
        <NavigationItem link="/" textFloat="center" exact>FOOTWEAR</NavigationItem>
        <NavigationItem link="/cart" textFloat="right"><CartIcon /></NavigationItem>
        <NavigationItem link="/help" textFloat="right">HELP</NavigationItem>
    </ul>
);

export default NavigationItems;