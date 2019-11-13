import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './Products.module.css';
import Product from './Product/Product';

const Products = ( props ) => {

    const products = props.productsDataOnUse.map(
        product => {
            return (
                <Link to={'/products/' + product.type + '/' + product.imageAlt} key={product.imageAlt}>
                    <Product 
                        imageSource={product.imageSource} 
                        imageAlt={product.imageAlt} 
                        title={product.title} 
                        price={product.price} /> 
                </Link>
            );
        }
    );

    return (
        <div className={classes.Products}>
            {products}
        </div>
    );
};

export default withRouter(Products);