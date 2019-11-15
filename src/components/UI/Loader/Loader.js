import React from 'react';

import classes from './Loader.module.css';

const Loader = ( props ) => {

    let loaderColor = props.darkLoader ? classes.Dark : classes.Light;

    return (
        <div className={classes.Loader + " " + loaderColor}>
            Loading...
        </div>
    );
};

export default Loader;