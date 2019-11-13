import React from 'react';

import classes from './Product.module.css';

const Product = ( props ) => {
    return (
        <div className={classes.ProductEmersion}>
            <article className={classes.Product}>
                <img src={props.imageSource} alt={props.imageAlt} />
                <h1>{props.title}</h1>
                <div>{`$${props.price}`}</div>
            </article>
        </div>

    );
};

export default Product; 