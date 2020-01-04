import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Cart.module.css';
import { useStore } from '../../hooks-store/store';

const Cart = () => {
    const [state, dispatch] = useStore();
    
    const removeItemFromCartHandler = product => {
        dispatch('REMOVE_SINGLE_FROM_CART', product);
    };
    
    const removeAllItemsFromCartHandler = product => {
        dispatch('REMOVE_ALL_FROM_CART', product);
    };
    
    const cartItemsQuantity = {};
    for (let cartItem of [...state.cartItems]) {
        if (cartItemsQuantity.hasOwnProperty(cartItem.title)) {
            cartItemsQuantity[cartItem.title]++;
        } else {
            cartItemsQuantity[cartItem.title] = 1;
        };
    };
    
    const cartItemsToShow = [...state.cartItems].filter((cartItem, index, self) => 
        index === self.findIndex(cI => cI.title === cartItem.title)
    );
    
    const emptyCartContent = (
        <section>
            <h1 className={classes.EmptyCart}>YOUR CART IS CURRENTLY EMPTY</h1>
            <h1><NavLink className={classes.BackToShop} to="/products">BACK TO SHOP</NavLink></h1>    
        </section>
    );
    
    const cartTotal = (
        <tr className={classes.CartTotal}>
            <th>TOTAL</th>
            <th className={classes.CartTableHeaders}>Between</th>
            <td><strong>${state.totalPrice.toFixed(2)}</strong></td>
        </tr>
    );
    
    const cartNext = (
        <section>
            <h1 className={classes.PaymentContinue}>CONTINUE TO <NavLink className={classes.BackToShop} to="/cart/payment">PAYMENT</NavLink> OR BACK TO <NavLink className={classes.BackToShop} to="/products">SHOP</NavLink></h1>
        </section>
    );
    
    let cartInsides;
    
    if (state.cartItems.length) {
        cartInsides = cartItemsToShow.map(
            (cartInside, index) => {
                return (
                    <tr className={classes.CartInside} key={cartInside.imageAlt + index}>
                        <td><img src={cartInside.imageSource} alt={cartInside.imageAlt}/></td>
                        <td><p><strong>{cartInside.title.toUpperCase()}</strong></p><p>{cartInside.country} ({cartInside.madeBy})</p></td>
                        <td>$<strong>{cartInside.price.toFixed(2)} x {cartItemsQuantity[cartInside.title]}</strong></td>
                        <td><button onClick={() => removeItemFromCartHandler(cartInside)}>REMOVE</button></td>
                        <td><button onClick={() => removeAllItemsFromCartHandler(cartInside)}>REMOVE ALL</button></td>
                    </tr>
                );
            }
        );
    };
    
    return (
        <div className={classes.Cart}>
            {!(cartInsides) && emptyCartContent}
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
                <tfoot>
                    {cartInsides && cartTotal}
                </tfoot>
            </table>
            {cartInsides && cartNext}
        </div>
    );
};

export default Cart;