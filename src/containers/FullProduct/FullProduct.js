import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './FullProduct.module.css';
import closeIcon from '../../assets/icons/closeFullProductIcon.png';
import Loader from '../../components/UI/Loader/Loader';
import { useStore } from '../../hooks-store/store';

const FullProduct = ( props ) => {

    const [productData, setProductData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const dispatch = useStore()[1];
    
    useEffect(() => {
        const url = `https://footwear-c379c.firebaseio.com/productsData/${props.match.params.type}.json`;
        const abortController = new AbortController();
        fetch(url, {signal: abortController.signal})
        .then(response => response.json()).then(responseData => {
            setProductData(responseData);
        })
        .catch(responseError => {
            setErrorMessage(responseError);
        });
        return () => {
            abortController.abort();
        };
    }, [props.match.params.type]);
    
    const closeFullProduct = () => {
        props.history.push('/products');
    };
    
    const addItemToCartHandler = product => {
        dispatch('ADD_TO_CART', product);
    };
    
    let fullProductContent, errorAlert;
    
    if (productData && !errorMessage) {
        for (let product of productData) {
            if (props.match.params.id === product.imageAlt) {
                fullProductContent = (
                    <article>
                        <img className={classes.FullProductImage} src={product.imageSource} alt={product.imageAlt}/>
                        <button className={`${classes.FullProductButton} ${classes.Add}`} onClick={() => addItemToCartHandler(product)}>ADD TO CART</button>
                        <section  className={classes.FullProductContent}>
                            <h2 className={classes.FullProductTitle}>{product.title}</h2>
                            <p><b>Type:</b> {product.type}</p>
                            <p><b>Color:</b> {product.color}</p>
                            <p><b>Made By:</b> {product.madeBy} in {product.country}</p>
                            <p><b>License:</b> {product.license}</p>
                            <p><b>Price:</b> ${product.price}</p>
                        </section>
                        <NavLink className={`${classes.FullProductButton} ${classes.Checkout}`} to="/cart">CHECKOUT</NavLink>
                    </article>
                );
                break;
            };
        };
    } else {
        errorAlert = <section className={classes.FullProductErrorMessage}>This data is currently unavailable.</section>
    };
    
    return (
        <div className={classes.FullProduct}>
            <img className={classes.FullProductCloseIcon} src={closeIcon} alt="CLOSE" onClick={closeFullProduct}/>
            {errorMessage ? errorAlert : (fullProductContent || <Loader classname={classes.FullProductOnLoad} />)}
        </div>
    );
};

export default FullProduct;