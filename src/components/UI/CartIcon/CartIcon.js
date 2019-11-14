import React from 'react';

import classes from './CartIcon.module.css';
import mainCartIcon from '../../../assets/icons/cartIcon.png';
import addCartIcon from '../../../assets/icons/cartIconAdd.png';

const CartIcon = (props) => {

    let cartIcon;

    switch (props.cartIconType) {
        case 'main': cartIcon = mainCartIcon; break;
        case 'add': cartIcon = addCartIcon; break;
        default: cartIcon = '';
    };
    
    return (
        <div className={props.className}>
            <img className={classes.CartIcon} src={cartIcon} alt={props.cartIconAlt}/>
        </div>
    );
};

export default CartIcon; 