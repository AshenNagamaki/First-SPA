import React from 'react';

import classes from './ProductsDescription.module.css';

export const ProductsDescription = ( props ) => {
    return (
        <section className={classes.ProductsDescription}>
            <h1 className={classes.ProductsDescriptionTitle}>{props.productsTitle}</h1>
            <article>{props.shortDescription}</article>
        </section>
    );
};