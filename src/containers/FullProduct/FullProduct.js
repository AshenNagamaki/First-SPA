import React from 'react';

import classes from './FullProduct.module.css';
import closeIcon from '../../assets/icons/closeFullProductIcon.png';

const FullProduct = ( props ) => {

    const closeFullProduct = () => {
        props.history.push('/products');
    };

    return (
        <div className={classes.FullProduct}>
            <img className={classes.FullProductCloseIcon} src={closeIcon} alt="CLOSE" onClick={closeFullProduct}/>
        </div>
    );
};

export default FullProduct;