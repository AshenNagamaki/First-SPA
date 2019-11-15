import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import classes from './ProductsList.module.css';
import Products from '../../components/Products/Products';
import ProductsDescription from '../../components/Products/ProductsDescription/ProductsDescription';
import FullProduct from '../FullProduct/FullProduct';
import Loader from '../../components/UI/Loader/Loader';

const ProductsList = (props) => {

    const [productsData, setProductsData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://footwear-c379c.firebaseio.com/productsData.json';
        const abortController = new AbortController();
        fetch(url, {signal: abortController.signal})
        .then(response => response.json()).then(responseData => {
            setProductsData(responseData);
        })
        .catch(responseError => {
            setError(responseError);
        });
        return () => {
            abortController.abort();
        };
    }, []);

    let sneakersProduct, hikingProduct, runningProduct, slipOnProduct, errorMessage;
    
    if (productsData && !error) {
        sneakersProduct = <Products productsDataOnUse={productsData['sneakers']}/>
        hikingProduct = <Products productsDataOnUse={productsData['hiking']}/>
        runningProduct = <Products productsDataOnUse={productsData['running']}/>
        slipOnProduct = <Products productsDataOnUse={productsData['slip-on']}/>
    } else {
        errorMessage = <section className={classes.ErrorMessage}>There are currently no products available.</section>
    };
    return (
        <div className={classes.ProductsList}>

            <Route path={props.match.url + '/:type/:id'} exact component={FullProduct} />

            <ProductsDescription productsTitle='SNEAKERS' shortDescription='Shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday wear.' />
            {error ? errorMessage : (sneakersProduct || <Loader darkLoader/>)}

            <ProductsDescription productsTitle='HIKING BOOTS' shortDescription='Footwear specifically designed for protecting the feet and ankles during outdoor walking activities such as hiking.' />
            {error ? errorMessage : (hikingProduct || <Loader darkLoader/>)}

            <ProductsDescription productsTitle='RUNNING SHOE' shortDescription='Made for running over long distances.' />
            {error ? errorMessage : (runningProduct || <Loader darkLoader/>)}

            <ProductsDescription productsTitle='SLIP-ON SHOE' shortDescription='Low, lace-less shoes. The style which is commonly seen, known as a loafer or slippers in American culture. Has a moccasin construction.' />
            {error ? errorMessage : (slipOnProduct || <Loader darkLoader/>)}

        </div>
    );
};

export default ProductsList;