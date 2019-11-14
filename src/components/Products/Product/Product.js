import React from 'react';

import classes from './Product.module.css';
import CartIcon from '../../UI/CartIcon/CartIcon';

const Product = ( props ) => {
    return (
        <div className={classes.ProductEmersion}>
            <article className={classes.Product}>
                <img className={classes.ProductImage} src={props.imageSource} alt={props.imageAlt} />
                <h1>{props.title}</h1>
                <div className={classes.ProductPrice}>{`$${props.price}`}</div>
                <CartIcon className={classes.CartIconAdd} cartIconType="add" cartIconAlt="ADD"/>
            </article>
        </div>

    );
};

export default Product;  