import React from 'react';

import classes from './CartIcon.module.css';
import MainCartIcon from '../../../assets/icons/cartIcon.png';

const CartIcon = () => (
    <img className={classes.CartIcon} src={MainCartIcon} alt="CART" />
);

export default CartIcon;