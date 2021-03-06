import React from 'react';

import classes from './Product.module.css';

export const Product = ( props ) => {
    return (
        <div className={classes.ProductEmersion}>
            <article className={classes.Product}>
                <img className={classes.ProductImage} src={props.imageSource} alt={props.imageAlt} />
                <h1>{props.title}</h1>
                <div className={classes.ProductPrice}>{`$${props.price.toFixed(2)}`}</div>
            </article>
        </div>

    );
};