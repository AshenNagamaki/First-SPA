import React from 'react';

import classes from './CartIcon.module.css';
import MainCartIcon from '../../../assets/images/cartIcon.png';

const CartIcon = ( props ) => (
    <img className={classes.CartIcon} src={MainCartIcon} alt="CART" />
);

export default CartIcon;