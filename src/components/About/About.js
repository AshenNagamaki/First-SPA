import React from 'react';

import classes from './About.module.css';

export const About = () => {
    return (
        <React.Fragment>
            <div className={classes.AboutHead}>
                <h1>Footwear</h1>
                <p>The Way You Walk - Best Quality, Best Prices</p>
            </div>
            <div className={classes.AboutFooter}>
                <p>When writing your About page, you don’t want to say the same things, and a long, detailed, historical summary will bore the reader. You also don’t want to sound like you’re boasting. As in most things, the best answer is to find the middle ground. Our middle ground is to produce the qualitative footwear for our customers.</p>
            </div>
        </React.Fragment>
    );
};