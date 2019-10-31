import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Ave.module.css';

const Ave = () => {
    return (
        <div className={classes.AveEmersion}>
            <section className={classes.Ave}>
                <h1 className={classes.Heading}>THE WAY YOU WALK</h1>
                <div className={classes.AveButton}>
                    <NavLink className={classes.OnEffect} to="/products">SHOP NOW
                        <span className={classes.OnEffectBackground}></span>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default Ave;