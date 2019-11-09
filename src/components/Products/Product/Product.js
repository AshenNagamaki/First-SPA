import React from 'react';

import classes from './Product.module.css';

const Product = ( props ) => {
    return (
        <article className={classes.Product}>
            <img src={props.imageSource} alt={props.imageAlt} />
            <hr />
            <h1>{props.title}</h1>
            <div>{`$${props.price}`}</div>
        </article>
    );
};

export default Product; 