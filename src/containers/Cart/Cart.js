import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './Cart.module.css';
import { useStore } from '../../hooks-store/store';

const Cart = () => {
    const [state, dispatch] = useStore();
    const cartItemsQuantity = {};
    for (let cartItem of [...state.cartItems]) {
        if (cartItemsQuantity.hasOwnProperty(cartItem.title)) {
            cartItemsQuantity[cartItem.title] ++;
        } else {
            cartItemsQuantity[cartItem.title] = 1;
        };
    };
    if (Object.keys(cartItemsQuantity).length > 5) {
    };
    const cartItemsToShow = [...state.cartItems].filter((cartItem, index, self) => 
        index === self.findIndex(cI => cI.title === cartItem.title)
    );
    const removeItemFromCartHandler = product => {
        dispatch('REMOVE_SINGLE_FROM_CART', product);
    };
    const removeAllItemsFromCartHandler = product => {
        dispatch('REMOVE_ALL_FROM_CART', product);
    };
    let cartInsides;
    if (state.cartItems.length) {
        cartInsides = cartItemsToShow.map(
            (cartInside, index) => {
                return (
                    <tr className={classes.CartInside} key={cartInside.imageAlt + index}>
                        <td><img src={cartInside.imageSource} alt={cartInside.imageAlt}/></td>
                        <td><p><strong>{cartInside.title.toUpperCase()} ({cartItemsQuantity[cartInside.title]})</strong></p><p>{cartInside.country} ({cartInside.madeBy})</p></td>
                        <td>$<strong>{cartInside.price}</strong></td>
                        <td><button onClick={() => removeItemFromCartHandler(cartInside)}>REMOVE</button></td>
                        <td><button onClick={() => removeAllItemsFromCartHandler(cartInside)}>REMOVE ALL</button></td>
                    </tr>
                );
            }
        );
    };

    return (
        <div className={classes.Cart}>
            <table>
                <thead>
                    <tr>
                        <th className={classes.CartTableHeaders}>Description</th>
                        <th className={classes.CartTableHeaders}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartInsides}
                </tbody>
            </table>
            <h1 className={classes.EmptyCart}>YOUR CART IS CURRENTLY EMPTY</h1>
            <h1><NavLink className={classes.BackToShop} to="/products">BACK TO SHOP</NavLink></h1>
            <h1>TOTAL <span className={classes.Currency}>USD</span> ${state.totalPrice}</h1>
            <h1>CONTINUE TO PAYMENT OR YOU CAN BACK TO <NavLink className={classes.BackToShop} to="/products">SHOP</NavLink></h1>
        </div>
    );
};

export default Cart;