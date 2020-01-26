import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Ave.module.css';

export const Ave = () => {
    return (
        <div className={classes.AveEmersion}>
            <section className={classes.Ave}>
                <h1 className={classes.Heading}>THE WAY YOU WALK</h1>
                <NavLink className={classes.AveButton} to="/products">SHOP NOW</NavLink>
            </section>
        </div>
    );
};