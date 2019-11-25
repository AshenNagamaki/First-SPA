import React from 'react';

import classes from './Cart.module.css';
import { useStore } from '../../hooks-store/store';

const Cart = () => {
    const [state, dispatch] = useStore();
    console.log(state)
    return (
        <div className={classes.Cart}></div>
    );
};

export default Cart;