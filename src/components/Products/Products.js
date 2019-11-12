import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import classes from './Products.module.css';
import Product from './Product/Product';
import FullProduct from '../../containers/FullProduct/FullProduct';

const Products = ( props ) => {

    const products = props.productsDataOnUse.map(
        product => {
            return (
                <Link to={'/products/' + product.imageAlt} key={product.imageAlt}>
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
            <Route path={props.match.url + '/:id'} exact component={FullProduct} />
        </div>
    );
};

export default withRouter(Products);