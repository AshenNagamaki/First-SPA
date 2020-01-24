import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import PaymentBox from '../PaymentBox/PaymentBox';
import classes from './Cart.module.css';
import { useStore } from '../../hooks-store/store';

const Cart = () => {
    const [state, dispatch] = useStore();
    const [isFromStorage, setIsFromStorage] = useState(false);
    const [isReadyToPay, setIsReadyToPay] = useState(false);

    if (!(isFromStorage) && (localStorage.getItem('currentCart') !== null)) {
        dispatch('FILL_THE_CART', JSON.parse(localStorage.getItem('currentCart')))
        setIsFromStorage(true);
    };

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight, 
                left: 0, 
                behavior: "smooth"
            });
        }, 50);
    }, [isReadyToPay]);

    const addItemToCartHandler = product => {
        dispatch('ADD_TO_CART', product);
    };
    
    const removeItemFromCartHandler = product => {
        dispatch('REMOVE_SINGLE_FROM_CART', product);
    };
    
    const removeAllItemsFromCartHandler = product => {
        dispatch('REMOVE_ALL_FROM_CART', product);
    };
    
    const clearCartHandler = () => {
        dispatch('CLEAR_CART');
    };
    
    const paymentShowingHandler = () => {
        setIsReadyToPay(true);
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
            <h1><NavLink className={classes.BackToShop} to="/products">RETURN TO SHOP</NavLink></h1>    
        </section>
    );
    
    const cartTotal = (
        <tr className={classes.CartTotal}>
            <th>TOTAL PRICE:</th>
            <th className={classes.CartTableHeaders}>Between</th>
            <td><strong>${state.totalPrice.toFixed(2)}</strong></td>
        </tr>
    );
    
    let cartNext;
    
    if (!isReadyToPay) {
        cartNext = (
            <section>
                <button className={classes.CartClearButton} onClick={clearCartHandler}>CLEAR</button>
                <h1 className={classes.PaymentContinue}>
                    CONTINUE TO <span className={classes.BackToShop} onClick={paymentShowingHandler}>PAYMENT</span> OR RETURN TO <NavLink className={classes.BackToShop} to="/products">SHOP</NavLink>
                </h1>
            </section>
        );
    } else {
        cartNext = (
        <section>
            <button className={classes.CartClearButton} onClick={clearCartHandler}>CLEAR</button>
            <h1 className={classes.PaymentContinue}>
                <NavLink className={classes.BackToShop} to="/products">RETURN TO SHOP</NavLink>
            </h1>
        </section>
        );
    };

    let cartInsides;
    
    if (state.cartItems.length) {
        cartInsides = cartItemsToShow.map(
            (cartInside, index) => {
                return (
                    <tr className={classes.CartInside} key={cartInside.imageAlt + index}>
                        <td><img src={cartInside.imageSource} alt={cartInside.imageAlt}/></td>
                        <td><p><strong>{cartInside.title.toUpperCase()}</strong></p><p>{cartInside.country} ({cartInside.madeBy})</p></td>
                        <td>$<strong>{cartInside.price.toFixed(2)} x {cartItemsQuantity[cartInside.title]}</strong></td>
                        <td><button onClick={() => addItemToCartHandler(cartInside)}>ADD</button></td>
                        <td><button onClick={() => removeItemFromCartHandler(cartInside)}>REMOVE</button></td>
                        <td><button disabled={cartItemsQuantity[cartInside.title] === 1} onClick={() => removeAllItemsFromCartHandler(cartInside)}>REMOVE ALL</button></td>
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
            {cartInsides && isReadyToPay && <PaymentBox />}
        </div>
    );
};

export default Cart;