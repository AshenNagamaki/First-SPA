import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = ( props ) => {

    let styleClass;

    switch(props.textFloat) {
        case 'center': styleClass = classes.NavigationItemCenter; break;
        case 'right': styleClass = classes.NavigationItemRight; break;
        default: styleClass = classes.NavigationItemLeft;
    };

    return (
        <li className={styleClass}>
            <NavLink className={classes.NavigationItemLink} to={props.link} exact={props.exact}>{props.children}</NavLink>
        </li>
    );
};

export default NavigationItem;