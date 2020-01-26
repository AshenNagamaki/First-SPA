import React from 'react';

import classes from './Help.module.css';

export const Help = () => {
    return (
        <div className={classes.HelpLogo}>
            <h1 className={classes.HelpLogoTitle}>Customer Service Care</h1>
            <section className={classes.HelpInfoPanel}><p>Our goal is to make Footwear as simple and intuitive as possible, but questions and suggestions inevitably arise, and our customers deserve a solid help section for those times. During the development of this section, you can get the necessary support by our Customer Service Team. You can reach it on the number <strong>1-132-965-7840</strong> from Monday to Friday. (Any time until the end of the development.) <br /><span>Thank you for patience!</span></p></section>
        </div>
    );
};