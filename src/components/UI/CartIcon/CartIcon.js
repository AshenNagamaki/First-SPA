import React from 'react';

import classes from './CartIcon.module.css';
import mainCartIcon from '../../../assets/icons/cartIcon.png';

export const CartIcon = (props) => {
    return <img className={classes.CartIcon} src={mainCartIcon} alt={props.cartIconAlt}/>
};